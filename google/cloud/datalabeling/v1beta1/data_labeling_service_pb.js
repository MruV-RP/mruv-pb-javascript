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
var google_cloud_datalabeling_v1beta1_annotation_pb = require('../../../../google/cloud/datalabeling/v1beta1/annotation_pb.js');
goog.object.extend(proto, google_cloud_datalabeling_v1beta1_annotation_pb);
var google_cloud_datalabeling_v1beta1_annotation_spec_set_pb = require('../../../../google/cloud/datalabeling/v1beta1/annotation_spec_set_pb.js');
goog.object.extend(proto, google_cloud_datalabeling_v1beta1_annotation_spec_set_pb);
var google_cloud_datalabeling_v1beta1_dataset_pb = require('../../../../google/cloud/datalabeling/v1beta1/dataset_pb.js');
goog.object.extend(proto, google_cloud_datalabeling_v1beta1_dataset_pb);
var google_cloud_datalabeling_v1beta1_evaluation_pb = require('../../../../google/cloud/datalabeling/v1beta1/evaluation_pb.js');
goog.object.extend(proto, google_cloud_datalabeling_v1beta1_evaluation_pb);
var google_cloud_datalabeling_v1beta1_evaluation_job_pb = require('../../../../google/cloud/datalabeling/v1beta1/evaluation_job_pb.js');
goog.object.extend(proto, google_cloud_datalabeling_v1beta1_evaluation_job_pb);
var google_cloud_datalabeling_v1beta1_human_annotation_config_pb = require('../../../../google/cloud/datalabeling/v1beta1/human_annotation_config_pb.js');
goog.object.extend(proto, google_cloud_datalabeling_v1beta1_human_annotation_config_pb);
var google_cloud_datalabeling_v1beta1_instruction_pb = require('../../../../google/cloud/datalabeling/v1beta1/instruction_pb.js');
goog.object.extend(proto, google_cloud_datalabeling_v1beta1_instruction_pb);
var google_cloud_datalabeling_v1beta1_operations_pb = require('../../../../google/cloud/datalabeling/v1beta1/operations_pb.js');
goog.object.extend(proto, google_cloud_datalabeling_v1beta1_operations_pb);
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ExportDataRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.GetExampleRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ImportDataRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.LabelImageRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.Feature', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.LabelTextRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.Feature', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.Feature', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison', null, global);
goog.exportSymbol('proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest', null, global);
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
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest';
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
proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse';
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
proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest';
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
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ImportDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.ImportDataRequest';
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
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ExportDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.ExportDataRequest';
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
proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse';
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
proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse';
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
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest';
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
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.oneofGroups_);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.LabelImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.LabelImageRequest';
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
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.oneofGroups_);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest';
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
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.oneofGroups_);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.LabelTextRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.LabelTextRequest';
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
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.GetExampleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.GetExampleRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse';
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
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest';
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
proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse';
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
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest';
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
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest';
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
proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest';
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
proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse';
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
proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest';
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
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest';
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
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.displayName = 'proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse';
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
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest';
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
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.displayName = 'proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse';
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
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.displayName = 'proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison';
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
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest';
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
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest';
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
proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest';
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
proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest';
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
proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest';
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
proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest';
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
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.displayName = 'proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse';
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
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataset: (f = msg.getDataset()) && google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest;
  return proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_datalabeling_v1beta1_dataset_pb.Dataset;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
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
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Dataset dataset = 2;
 * @return {?proto.google.cloud.datalabeling.v1beta1.Dataset}
 */
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.Dataset} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_dataset_pb.Dataset, 2));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.Dataset|undefined} value */
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.CreateDatasetRequest.prototype.hasDataset = function() {
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
proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest;
  return proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.GetDatasetRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest;
  return proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.repeatedFields_ = [1];



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
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    datasetsList: jspb.Message.toObjectList(msg.getDatasetsList(),
    google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.toObject, includeInstance),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse;
  return proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datalabeling_v1beta1_dataset_pb.Dataset;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.deserializeBinaryFromReader);
      msg.addDatasets(value);
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
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.serializeBinaryToWriter
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
 * repeated Dataset datasets = 1;
 * @return {!Array<!proto.google.cloud.datalabeling.v1beta1.Dataset>}
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.prototype.getDatasetsList = function() {
  return /** @type{!Array<!proto.google.cloud.datalabeling.v1beta1.Dataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datalabeling_v1beta1_dataset_pb.Dataset, 1));
};


/** @param {!Array<!proto.google.cloud.datalabeling.v1beta1.Dataset>} value */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.prototype.setDatasetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datalabeling.v1beta1.Dataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datalabeling.v1beta1.Dataset}
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.prototype.addDatasets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datalabeling.v1beta1.Dataset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.prototype.clearDatasetsList = function() {
  this.setDatasetsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListDatasetsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest;
  return proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ImportDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inputConfig: (f = msg.getInputConfig()) && google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig.toObject(includeInstance, f),
    userEmailAddress: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ImportDataRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ImportDataRequest;
  return proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ImportDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ImportDataRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig.deserializeBinaryFromReader);
      msg.setInputConfig(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserEmailAddress(value);
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
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ImportDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInputConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig.serializeBinaryToWriter
    );
  }
  f = message.getUserEmailAddress();
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
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional InputConfig input_config = 2;
 * @return {?proto.google.cloud.datalabeling.v1beta1.InputConfig}
 */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.prototype.getInputConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.InputConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig, 2));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.InputConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.prototype.setInputConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.prototype.clearInputConfig = function() {
  this.setInputConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.prototype.hasInputConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string user_email_address = 3;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.prototype.getUserEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ImportDataRequest.prototype.setUserEmailAddress = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ExportDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    annotatedDataset: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    outputConfig: (f = msg.getOutputConfig()) && google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig.toObject(includeInstance, f),
    userEmailAddress: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ExportDataRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ExportDataRequest;
  return proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ExportDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ExportDataRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAnnotatedDataset(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 4:
      var value = new google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig.deserializeBinaryFromReader);
      msg.setOutputConfig(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserEmailAddress(value);
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
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ExportDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnnotatedDataset();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOutputConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig.serializeBinaryToWriter
    );
  }
  f = message.getUserEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string annotated_dataset = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.getAnnotatedDataset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.setAnnotatedDataset = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional OutputConfig output_config = 4;
 * @return {?proto.google.cloud.datalabeling.v1beta1.OutputConfig}
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.getOutputConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.OutputConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig, 4));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.OutputConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.setOutputConfig = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.clearOutputConfig = function() {
  this.setOutputConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.hasOutputConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user_email_address = 5;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.getUserEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ExportDataRequest.prototype.setUserEmailAddress = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest;
  return proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.GetDataItemRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest;
  return proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.repeatedFields_ = [1];



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
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataItemsList: jspb.Message.toObjectList(msg.getDataItemsList(),
    google_cloud_datalabeling_v1beta1_dataset_pb.DataItem.toObject, includeInstance),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse;
  return proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datalabeling_v1beta1_dataset_pb.DataItem;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_dataset_pb.DataItem.deserializeBinaryFromReader);
      msg.addDataItems(value);
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
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_datalabeling_v1beta1_dataset_pb.DataItem.serializeBinaryToWriter
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
 * repeated DataItem data_items = 1;
 * @return {!Array<!proto.google.cloud.datalabeling.v1beta1.DataItem>}
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.prototype.getDataItemsList = function() {
  return /** @type{!Array<!proto.google.cloud.datalabeling.v1beta1.DataItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datalabeling_v1beta1_dataset_pb.DataItem, 1));
};


/** @param {!Array<!proto.google.cloud.datalabeling.v1beta1.DataItem>} value */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.prototype.setDataItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datalabeling.v1beta1.DataItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datalabeling.v1beta1.DataItem}
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.prototype.addDataItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datalabeling.v1beta1.DataItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.prototype.clearDataItemsList = function() {
  this.setDataItemsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListDataItemsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest;
  return proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest;
  return proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.repeatedFields_ = [1];



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
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    annotatedDatasetsList: jspb.Message.toObjectList(msg.getAnnotatedDatasetsList(),
    google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset.toObject, includeInstance),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse;
  return proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset.deserializeBinaryFromReader);
      msg.addAnnotatedDatasets(value);
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnnotatedDatasetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset.serializeBinaryToWriter
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
 * repeated AnnotatedDataset annotated_datasets = 1;
 * @return {!Array<!proto.google.cloud.datalabeling.v1beta1.AnnotatedDataset>}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.prototype.getAnnotatedDatasetsList = function() {
  return /** @type{!Array<!proto.google.cloud.datalabeling.v1beta1.AnnotatedDataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset, 1));
};


/** @param {!Array<!proto.google.cloud.datalabeling.v1beta1.AnnotatedDataset>} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.prototype.setAnnotatedDatasetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datalabeling.v1beta1.AnnotatedDataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datalabeling.v1beta1.AnnotatedDataset}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.prototype.addAnnotatedDatasets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datalabeling.v1beta1.AnnotatedDataset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.prototype.clearAnnotatedDatasetsList = function() {
  this.setAnnotatedDatasetsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest;
  return proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.oneofGroups_ = [[4,5,6,7]];

/**
 * @enum {number}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.RequestConfigCase = {
  REQUEST_CONFIG_NOT_SET: 0,
  IMAGE_CLASSIFICATION_CONFIG: 4,
  BOUNDING_POLY_CONFIG: 5,
  POLYLINE_CONFIG: 6,
  SEGMENTATION_CONFIG: 7
};

/**
 * @return {proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.RequestConfigCase}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.getRequestConfigCase = function() {
  return /** @type {proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.RequestConfigCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.oneofGroups_[0]));
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
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.LabelImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageClassificationConfig: (f = msg.getImageClassificationConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig.toObject(includeInstance, f),
    boundingPolyConfig: (f = msg.getBoundingPolyConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig.toObject(includeInstance, f),
    polylineConfig: (f = msg.getPolylineConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig.toObject(includeInstance, f),
    segmentationConfig: (f = msg.getSegmentationConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig.toObject(includeInstance, f),
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    basicConfig: (f = msg.getBasicConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.toObject(includeInstance, f),
    feature: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.LabelImageRequest}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.LabelImageRequest;
  return proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.LabelImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.LabelImageRequest}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig.deserializeBinaryFromReader);
      msg.setImageClassificationConfig(value);
      break;
    case 5:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig.deserializeBinaryFromReader);
      msg.setBoundingPolyConfig(value);
      break;
    case 6:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig.deserializeBinaryFromReader);
      msg.setPolylineConfig(value);
      break;
    case 7:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig.deserializeBinaryFromReader);
      msg.setSegmentationConfig(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.deserializeBinaryFromReader);
      msg.setBasicConfig(value);
      break;
    case 3:
      var value = /** @type {!proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.Feature} */ (reader.readEnum());
      msg.setFeature(value);
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
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.LabelImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImageClassificationConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig.serializeBinaryToWriter
    );
  }
  f = message.getBoundingPolyConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig.serializeBinaryToWriter
    );
  }
  f = message.getPolylineConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig.serializeBinaryToWriter
    );
  }
  f = message.getSegmentationConfig();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig.serializeBinaryToWriter
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBasicConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.serializeBinaryToWriter
    );
  }
  f = message.getFeature();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.Feature = {
  FEATURE_UNSPECIFIED: 0,
  CLASSIFICATION: 1,
  BOUNDING_BOX: 2,
  ORIENTED_BOUNDING_BOX: 6,
  BOUNDING_POLY: 3,
  POLYLINE: 4,
  SEGMENTATION: 5
};

/**
 * optional ImageClassificationConfig image_classification_config = 4;
 * @return {?proto.google.cloud.datalabeling.v1beta1.ImageClassificationConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.getImageClassificationConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.ImageClassificationConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig, 4));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.ImageClassificationConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.setImageClassificationConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.clearImageClassificationConfig = function() {
  this.setImageClassificationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.hasImageClassificationConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BoundingPolyConfig bounding_poly_config = 5;
 * @return {?proto.google.cloud.datalabeling.v1beta1.BoundingPolyConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.getBoundingPolyConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.BoundingPolyConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig, 5));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.BoundingPolyConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.setBoundingPolyConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.clearBoundingPolyConfig = function() {
  this.setBoundingPolyConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.hasBoundingPolyConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PolylineConfig polyline_config = 6;
 * @return {?proto.google.cloud.datalabeling.v1beta1.PolylineConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.getPolylineConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.PolylineConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig, 6));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.PolylineConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.setPolylineConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.clearPolylineConfig = function() {
  this.setPolylineConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.hasPolylineConfig = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SegmentationConfig segmentation_config = 7;
 * @return {?proto.google.cloud.datalabeling.v1beta1.SegmentationConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.getSegmentationConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.SegmentationConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig, 7));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.SegmentationConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.setSegmentationConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.clearSegmentationConfig = function() {
  this.setSegmentationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.hasSegmentationConfig = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional HumanAnnotationConfig basic_config = 2;
 * @return {?proto.google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.getBasicConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.HumanAnnotationConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig, 2));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.HumanAnnotationConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.setBasicConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.clearBasicConfig = function() {
  this.setBasicConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.hasBasicConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Feature feature = 3;
 * @return {!proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.Feature}
 */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.getFeature = function() {
  return /** @type {!proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.Feature} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.Feature} value */
proto.google.cloud.datalabeling.v1beta1.LabelImageRequest.prototype.setFeature = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.oneofGroups_ = [[4,5,6,7]];

/**
 * @enum {number}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.RequestConfigCase = {
  REQUEST_CONFIG_NOT_SET: 0,
  VIDEO_CLASSIFICATION_CONFIG: 4,
  OBJECT_DETECTION_CONFIG: 5,
  OBJECT_TRACKING_CONFIG: 6,
  EVENT_CONFIG: 7
};

/**
 * @return {proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.RequestConfigCase}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.getRequestConfigCase = function() {
  return /** @type {proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.RequestConfigCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.oneofGroups_[0]));
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
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    videoClassificationConfig: (f = msg.getVideoClassificationConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig.toObject(includeInstance, f),
    objectDetectionConfig: (f = msg.getObjectDetectionConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig.toObject(includeInstance, f),
    objectTrackingConfig: (f = msg.getObjectTrackingConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig.toObject(includeInstance, f),
    eventConfig: (f = msg.getEventConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig.toObject(includeInstance, f),
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    basicConfig: (f = msg.getBasicConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.toObject(includeInstance, f),
    feature: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest;
  return proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig.deserializeBinaryFromReader);
      msg.setVideoClassificationConfig(value);
      break;
    case 5:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig.deserializeBinaryFromReader);
      msg.setObjectDetectionConfig(value);
      break;
    case 6:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig.deserializeBinaryFromReader);
      msg.setObjectTrackingConfig(value);
      break;
    case 7:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig.deserializeBinaryFromReader);
      msg.setEventConfig(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.deserializeBinaryFromReader);
      msg.setBasicConfig(value);
      break;
    case 3:
      var value = /** @type {!proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.Feature} */ (reader.readEnum());
      msg.setFeature(value);
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
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoClassificationConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig.serializeBinaryToWriter
    );
  }
  f = message.getObjectDetectionConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig.serializeBinaryToWriter
    );
  }
  f = message.getObjectTrackingConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig.serializeBinaryToWriter
    );
  }
  f = message.getEventConfig();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig.serializeBinaryToWriter
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBasicConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.serializeBinaryToWriter
    );
  }
  f = message.getFeature();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.Feature = {
  FEATURE_UNSPECIFIED: 0,
  CLASSIFICATION: 1,
  OBJECT_DETECTION: 2,
  OBJECT_TRACKING: 3,
  EVENT: 4
};

/**
 * optional VideoClassificationConfig video_classification_config = 4;
 * @return {?proto.google.cloud.datalabeling.v1beta1.VideoClassificationConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.getVideoClassificationConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.VideoClassificationConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig, 4));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.VideoClassificationConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.setVideoClassificationConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.clearVideoClassificationConfig = function() {
  this.setVideoClassificationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.hasVideoClassificationConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ObjectDetectionConfig object_detection_config = 5;
 * @return {?proto.google.cloud.datalabeling.v1beta1.ObjectDetectionConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.getObjectDetectionConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.ObjectDetectionConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig, 5));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.ObjectDetectionConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.setObjectDetectionConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.clearObjectDetectionConfig = function() {
  this.setObjectDetectionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.hasObjectDetectionConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ObjectTrackingConfig object_tracking_config = 6;
 * @return {?proto.google.cloud.datalabeling.v1beta1.ObjectTrackingConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.getObjectTrackingConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.ObjectTrackingConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig, 6));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.ObjectTrackingConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.setObjectTrackingConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.clearObjectTrackingConfig = function() {
  this.setObjectTrackingConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.hasObjectTrackingConfig = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional EventConfig event_config = 7;
 * @return {?proto.google.cloud.datalabeling.v1beta1.EventConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.getEventConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.EventConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig, 7));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.EventConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.setEventConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.clearEventConfig = function() {
  this.setEventConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.hasEventConfig = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional HumanAnnotationConfig basic_config = 2;
 * @return {?proto.google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.getBasicConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.HumanAnnotationConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig, 2));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.HumanAnnotationConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.setBasicConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.clearBasicConfig = function() {
  this.setBasicConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.hasBasicConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Feature feature = 3;
 * @return {!proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.Feature}
 */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.getFeature = function() {
  return /** @type {!proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.Feature} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.Feature} value */
proto.google.cloud.datalabeling.v1beta1.LabelVideoRequest.prototype.setFeature = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.RequestConfigCase = {
  REQUEST_CONFIG_NOT_SET: 0,
  TEXT_CLASSIFICATION_CONFIG: 4,
  TEXT_ENTITY_EXTRACTION_CONFIG: 5
};

/**
 * @return {proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.RequestConfigCase}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.getRequestConfigCase = function() {
  return /** @type {proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.RequestConfigCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.oneofGroups_[0]));
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
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.LabelTextRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    textClassificationConfig: (f = msg.getTextClassificationConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig.toObject(includeInstance, f),
    textEntityExtractionConfig: (f = msg.getTextEntityExtractionConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig.toObject(includeInstance, f),
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    basicConfig: (f = msg.getBasicConfig()) && google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.toObject(includeInstance, f),
    feature: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.LabelTextRequest}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.LabelTextRequest;
  return proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.LabelTextRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.LabelTextRequest}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig.deserializeBinaryFromReader);
      msg.setTextClassificationConfig(value);
      break;
    case 5:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig.deserializeBinaryFromReader);
      msg.setTextEntityExtractionConfig(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.deserializeBinaryFromReader);
      msg.setBasicConfig(value);
      break;
    case 6:
      var value = /** @type {!proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.Feature} */ (reader.readEnum());
      msg.setFeature(value);
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
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.LabelTextRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextClassificationConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig.serializeBinaryToWriter
    );
  }
  f = message.getTextEntityExtractionConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig.serializeBinaryToWriter
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBasicConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.serializeBinaryToWriter
    );
  }
  f = message.getFeature();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.Feature = {
  FEATURE_UNSPECIFIED: 0,
  TEXT_CLASSIFICATION: 1,
  TEXT_ENTITY_EXTRACTION: 2
};

/**
 * optional TextClassificationConfig text_classification_config = 4;
 * @return {?proto.google.cloud.datalabeling.v1beta1.TextClassificationConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.getTextClassificationConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.TextClassificationConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig, 4));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.TextClassificationConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.setTextClassificationConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.clearTextClassificationConfig = function() {
  this.setTextClassificationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.hasTextClassificationConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TextEntityExtractionConfig text_entity_extraction_config = 5;
 * @return {?proto.google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.getTextEntityExtractionConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig, 5));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.setTextEntityExtractionConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.clearTextEntityExtractionConfig = function() {
  this.setTextEntityExtractionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.hasTextEntityExtractionConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional HumanAnnotationConfig basic_config = 2;
 * @return {?proto.google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.getBasicConfig = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.HumanAnnotationConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig, 2));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.HumanAnnotationConfig|undefined} value */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.setBasicConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.clearBasicConfig = function() {
  this.setBasicConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.hasBasicConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Feature feature = 6;
 * @return {!proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.Feature}
 */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.getFeature = function() {
  return /** @type {!proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.Feature} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.Feature} value */
proto.google.cloud.datalabeling.v1beta1.LabelTextRequest.prototype.setFeature = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
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
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetExampleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetExampleRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.GetExampleRequest;
  return proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetExampleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetExampleRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFilter(value);
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
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetExampleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.GetExampleRequest.prototype.setFilter = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest;
  return proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListExamplesRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.repeatedFields_ = [1];



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
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    examplesList: jspb.Message.toObjectList(msg.getExamplesList(),
    google_cloud_datalabeling_v1beta1_dataset_pb.Example.toObject, includeInstance),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse;
  return proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datalabeling_v1beta1_dataset_pb.Example;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_dataset_pb.Example.deserializeBinaryFromReader);
      msg.addExamples(value);
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
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExamplesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_datalabeling_v1beta1_dataset_pb.Example.serializeBinaryToWriter
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
 * repeated Example examples = 1;
 * @return {!Array<!proto.google.cloud.datalabeling.v1beta1.Example>}
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.prototype.getExamplesList = function() {
  return /** @type{!Array<!proto.google.cloud.datalabeling.v1beta1.Example>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datalabeling_v1beta1_dataset_pb.Example, 1));
};


/** @param {!Array<!proto.google.cloud.datalabeling.v1beta1.Example>} value */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.prototype.setExamplesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datalabeling.v1beta1.Example=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datalabeling.v1beta1.Example}
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.prototype.addExamples = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datalabeling.v1beta1.Example, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.prototype.clearExamplesList = function() {
  this.setExamplesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListExamplesResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    annotationSpecSet: (f = msg.getAnnotationSpecSet()) && google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest;
  return proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.deserializeBinaryFromReader);
      msg.setAnnotationSpecSet(value);
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
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnnotationSpecSet();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AnnotationSpecSet annotation_spec_set = 2;
 * @return {?proto.google.cloud.datalabeling.v1beta1.AnnotationSpecSet}
 */
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.prototype.getAnnotationSpecSet = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.AnnotationSpecSet} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet, 2));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.AnnotationSpecSet|undefined} value */
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.prototype.setAnnotationSpecSet = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.prototype.clearAnnotationSpecSet = function() {
  this.setAnnotationSpecSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.prototype.hasAnnotationSpecSet = function() {
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
proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest;
  return proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest;
  return proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.repeatedFields_ = [1];



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
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    annotationSpecSetsList: jspb.Message.toObjectList(msg.getAnnotationSpecSetsList(),
    google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.toObject, includeInstance),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse;
  return proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.deserializeBinaryFromReader);
      msg.addAnnotationSpecSets(value);
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
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnnotationSpecSetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.serializeBinaryToWriter
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
 * repeated AnnotationSpecSet annotation_spec_sets = 1;
 * @return {!Array<!proto.google.cloud.datalabeling.v1beta1.AnnotationSpecSet>}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.prototype.getAnnotationSpecSetsList = function() {
  return /** @type{!Array<!proto.google.cloud.datalabeling.v1beta1.AnnotationSpecSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet, 1));
};


/** @param {!Array<!proto.google.cloud.datalabeling.v1beta1.AnnotationSpecSet>} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.prototype.setAnnotationSpecSetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datalabeling.v1beta1.AnnotationSpecSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datalabeling.v1beta1.AnnotationSpecSet}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.prototype.addAnnotationSpecSets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datalabeling.v1beta1.AnnotationSpecSet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.prototype.clearAnnotationSpecSetsList = function() {
  this.setAnnotationSpecSetsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest;
  return proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest}
 */
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    instruction: (f = msg.getInstruction()) && google_cloud_datalabeling_v1beta1_instruction_pb.Instruction.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest}
 */
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest;
  return proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest}
 */
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_datalabeling_v1beta1_instruction_pb.Instruction;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_instruction_pb.Instruction.deserializeBinaryFromReader);
      msg.setInstruction(value);
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
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstruction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datalabeling_v1beta1_instruction_pb.Instruction.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Instruction instruction = 2;
 * @return {?proto.google.cloud.datalabeling.v1beta1.Instruction}
 */
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.prototype.getInstruction = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.Instruction} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_instruction_pb.Instruction, 2));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.Instruction|undefined} value */
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.prototype.setInstruction = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.prototype.clearInstruction = function() {
  this.setInstruction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.CreateInstructionRequest.prototype.hasInstruction = function() {
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
proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest;
  return proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.GetInstructionRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest}
 */
proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest;
  return proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest}
 */
proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest;
  return proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.repeatedFields_ = [1];



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
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    instructionsList: jspb.Message.toObjectList(msg.getInstructionsList(),
    google_cloud_datalabeling_v1beta1_instruction_pb.Instruction.toObject, includeInstance),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse;
  return proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datalabeling_v1beta1_instruction_pb.Instruction;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_instruction_pb.Instruction.deserializeBinaryFromReader);
      msg.addInstructions(value);
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
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstructionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_datalabeling_v1beta1_instruction_pb.Instruction.serializeBinaryToWriter
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
 * repeated Instruction instructions = 1;
 * @return {!Array<!proto.google.cloud.datalabeling.v1beta1.Instruction>}
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.prototype.getInstructionsList = function() {
  return /** @type{!Array<!proto.google.cloud.datalabeling.v1beta1.Instruction>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datalabeling_v1beta1_instruction_pb.Instruction, 1));
};


/** @param {!Array<!proto.google.cloud.datalabeling.v1beta1.Instruction>} value */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.prototype.setInstructionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datalabeling.v1beta1.Instruction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datalabeling.v1beta1.Instruction}
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.prototype.addInstructions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datalabeling.v1beta1.Instruction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.prototype.clearInstructionsList = function() {
  this.setInstructionsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListInstructionsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest;
  return proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.GetEvaluationRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest;
  return proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.repeatedFields_ = [1];



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
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    evaluationsList: jspb.Message.toObjectList(msg.getEvaluationsList(),
    google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation.toObject, includeInstance),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse;
  return proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation.deserializeBinaryFromReader);
      msg.addEvaluations(value);
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
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvaluationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation.serializeBinaryToWriter
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
 * repeated Evaluation evaluations = 1;
 * @return {!Array<!proto.google.cloud.datalabeling.v1beta1.Evaluation>}
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.prototype.getEvaluationsList = function() {
  return /** @type{!Array<!proto.google.cloud.datalabeling.v1beta1.Evaluation>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation, 1));
};


/** @param {!Array<!proto.google.cloud.datalabeling.v1beta1.Evaluation>} value */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.prototype.setEvaluationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datalabeling.v1beta1.Evaluation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datalabeling.v1beta1.Evaluation}
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.prototype.addEvaluations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datalabeling.v1beta1.Evaluation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.prototype.clearEvaluationsList = function() {
  this.setEvaluationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest;
  return proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.repeatedFields_ = [1];



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
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    exampleComparisonsList: jspb.Message.toObjectList(msg.getExampleComparisonsList(),
    proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.toObject, includeInstance),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse;
  return proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison;
      reader.readMessage(value,proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.deserializeBinaryFromReader);
      msg.addExampleComparisons(value);
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
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExampleComparisonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.serializeBinaryToWriter
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
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.repeatedFields_ = [2];



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
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.toObject = function(includeInstance, msg) {
  var f, obj = {
    groundTruthExample: (f = msg.getGroundTruthExample()) && google_cloud_datalabeling_v1beta1_dataset_pb.Example.toObject(includeInstance, f),
    modelCreatedExamplesList: jspb.Message.toObjectList(msg.getModelCreatedExamplesList(),
    google_cloud_datalabeling_v1beta1_dataset_pb.Example.toObject, includeInstance)
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison;
  return proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datalabeling_v1beta1_dataset_pb.Example;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_dataset_pb.Example.deserializeBinaryFromReader);
      msg.setGroundTruthExample(value);
      break;
    case 2:
      var value = new google_cloud_datalabeling_v1beta1_dataset_pb.Example;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_dataset_pb.Example.deserializeBinaryFromReader);
      msg.addModelCreatedExamples(value);
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
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroundTruthExample();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_datalabeling_v1beta1_dataset_pb.Example.serializeBinaryToWriter
    );
  }
  f = message.getModelCreatedExamplesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_cloud_datalabeling_v1beta1_dataset_pb.Example.serializeBinaryToWriter
    );
  }
};


/**
 * optional Example ground_truth_example = 1;
 * @return {?proto.google.cloud.datalabeling.v1beta1.Example}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.prototype.getGroundTruthExample = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.Example} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_dataset_pb.Example, 1));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.Example|undefined} value */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.prototype.setGroundTruthExample = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.prototype.clearGroundTruthExample = function() {
  this.setGroundTruthExample(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.prototype.hasGroundTruthExample = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Example model_created_examples = 2;
 * @return {!Array<!proto.google.cloud.datalabeling.v1beta1.Example>}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.prototype.getModelCreatedExamplesList = function() {
  return /** @type{!Array<!proto.google.cloud.datalabeling.v1beta1.Example>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datalabeling_v1beta1_dataset_pb.Example, 2));
};


/** @param {!Array<!proto.google.cloud.datalabeling.v1beta1.Example>} value */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.prototype.setModelCreatedExamplesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.datalabeling.v1beta1.Example=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datalabeling.v1beta1.Example}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.prototype.addModelCreatedExamples = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.datalabeling.v1beta1.Example, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.prototype.clearModelCreatedExamplesList = function() {
  this.setModelCreatedExamplesList([]);
};


/**
 * repeated ExampleComparison example_comparisons = 1;
 * @return {!Array<!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison>}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.prototype.getExampleComparisonsList = function() {
  return /** @type{!Array<!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison, 1));
};


/** @param {!Array<!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison>} value */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.prototype.setExampleComparisonsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.prototype.addExampleComparisons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.prototype.clearExampleComparisonsList = function() {
  this.setExampleComparisonsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    job: (f = msg.getJob()) && google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest;
  return proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.deserializeBinaryFromReader);
      msg.setJob(value);
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
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJob();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EvaluationJob job = 2;
 * @return {?proto.google.cloud.datalabeling.v1beta1.EvaluationJob}
 */
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.prototype.getJob = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.EvaluationJob} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob, 2));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.EvaluationJob|undefined} value */
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.prototype.setJob = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.prototype.clearJob = function() {
  this.setJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.prototype.hasJob = function() {
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
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    evaluationJob: (f = msg.getEvaluationJob()) && google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest;
  return proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.deserializeBinaryFromReader);
      msg.setEvaluationJob(value);
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
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvaluationJob();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.serializeBinaryToWriter
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
 * optional EvaluationJob evaluation_job = 1;
 * @return {?proto.google.cloud.datalabeling.v1beta1.EvaluationJob}
 */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.prototype.getEvaluationJob = function() {
  return /** @type{?proto.google.cloud.datalabeling.v1beta1.EvaluationJob} */ (
    jspb.Message.getWrapperField(this, google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob, 1));
};


/** @param {?proto.google.cloud.datalabeling.v1beta1.EvaluationJob|undefined} value */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.prototype.setEvaluationJob = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.prototype.clearEvaluationJob = function() {
  this.setEvaluationJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.prototype.hasEvaluationJob = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest;
  return proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest;
  return proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest;
  return proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest;
  return proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest}
 */
proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.prototype.setName = function(value) {
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
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest;
  return proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest}
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.repeatedFields_ = [1];



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
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    evaluationJobsList: jspb.Message.toObjectList(msg.getEvaluationJobsList(),
    google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.toObject, includeInstance),
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
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse;
  return proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse}
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob;
      reader.readMessage(value,google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.deserializeBinaryFromReader);
      msg.addEvaluationJobs(value);
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
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvaluationJobsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.serializeBinaryToWriter
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
 * repeated EvaluationJob evaluation_jobs = 1;
 * @return {!Array<!proto.google.cloud.datalabeling.v1beta1.EvaluationJob>}
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.prototype.getEvaluationJobsList = function() {
  return /** @type{!Array<!proto.google.cloud.datalabeling.v1beta1.EvaluationJob>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob, 1));
};


/** @param {!Array<!proto.google.cloud.datalabeling.v1beta1.EvaluationJob>} value */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.prototype.setEvaluationJobsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.datalabeling.v1beta1.EvaluationJob=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.datalabeling.v1beta1.EvaluationJob}
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.prototype.addEvaluationJobs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.datalabeling.v1beta1.EvaluationJob, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.prototype.clearEvaluationJobsList = function() {
  this.setEvaluationJobsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.google.cloud.datalabeling.v1beta1);
