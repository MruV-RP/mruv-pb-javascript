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
var google_cloud_automl_v1beta1_annotation_payload_pb = require('../../../../google/cloud/automl/v1beta1/annotation_payload_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_annotation_payload_pb);
var google_cloud_automl_v1beta1_annotation_spec_pb = require('../../../../google/cloud/automl/v1beta1/annotation_spec_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_annotation_spec_pb);
var google_cloud_automl_v1beta1_column_spec_pb = require('../../../../google/cloud/automl/v1beta1/column_spec_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_column_spec_pb);
var google_cloud_automl_v1beta1_dataset_pb = require('../../../../google/cloud/automl/v1beta1/dataset_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_dataset_pb);
var google_cloud_automl_v1beta1_image_pb = require('../../../../google/cloud/automl/v1beta1/image_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_image_pb);
var google_cloud_automl_v1beta1_io_pb = require('../../../../google/cloud/automl/v1beta1/io_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_io_pb);
var google_cloud_automl_v1beta1_model_pb = require('../../../../google/cloud/automl/v1beta1/model_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_model_pb);
var google_cloud_automl_v1beta1_model_evaluation_pb = require('../../../../google/cloud/automl/v1beta1/model_evaluation_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_model_evaluation_pb);
var google_cloud_automl_v1beta1_operations_pb = require('../../../../google/cloud/automl/v1beta1/operations_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_operations_pb);
var google_cloud_automl_v1beta1_table_spec_pb = require('../../../../google/cloud/automl/v1beta1/table_spec_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_table_spec_pb);
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_api_client_pb = require('../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.CreateDatasetRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.CreateModelRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.DeleteDatasetRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.DeleteModelRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.DeployModelRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ExportDataRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ExportModelRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.GetColumnSpecRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.GetDatasetRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.GetModelRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.GetTableSpecRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ImportDataRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ListDatasetsRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ListDatasetsResponse', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ListModelsRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ListModelsResponse', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ListTableSpecsRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.ListTableSpecsResponse', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.UndeployModelRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.UpdateDatasetRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.CreateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.CreateDatasetRequest.displayName = 'proto.google.cloud.automl.v1beta1.CreateDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.GetDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.GetDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.GetDatasetRequest.displayName = 'proto.google.cloud.automl.v1beta1.GetDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ListDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ListDatasetsRequest.displayName = 'proto.google.cloud.automl.v1beta1.ListDatasetsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.automl.v1beta1.ListDatasetsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ListDatasetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ListDatasetsResponse.displayName = 'proto.google.cloud.automl.v1beta1.ListDatasetsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.UpdateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.displayName = 'proto.google.cloud.automl.v1beta1.UpdateDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.DeleteDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.DeleteDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.displayName = 'proto.google.cloud.automl.v1beta1.DeleteDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ImportDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ImportDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ImportDataRequest.displayName = 'proto.google.cloud.automl.v1beta1.ImportDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ExportDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ExportDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ExportDataRequest.displayName = 'proto.google.cloud.automl.v1beta1.ExportDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.displayName = 'proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.GetTableSpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.GetTableSpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.GetTableSpecRequest.displayName = 'proto.google.cloud.automl.v1beta1.GetTableSpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ListTableSpecsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.displayName = 'proto.google.cloud.automl.v1beta1.ListTableSpecsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ListTableSpecsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.displayName = 'proto.google.cloud.automl.v1beta1.ListTableSpecsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.displayName = 'proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.GetColumnSpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.displayName = 'proto.google.cloud.automl.v1beta1.GetColumnSpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.displayName = 'proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.displayName = 'proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.displayName = 'proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.CreateModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.CreateModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.CreateModelRequest.displayName = 'proto.google.cloud.automl.v1beta1.CreateModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.GetModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.GetModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.GetModelRequest.displayName = 'proto.google.cloud.automl.v1beta1.GetModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ListModelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ListModelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ListModelsRequest.displayName = 'proto.google.cloud.automl.v1beta1.ListModelsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.automl.v1beta1.ListModelsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ListModelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ListModelsResponse.displayName = 'proto.google.cloud.automl.v1beta1.ListModelsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.DeleteModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.DeleteModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.DeleteModelRequest.displayName = 'proto.google.cloud.automl.v1beta1.DeleteModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.automl.v1beta1.DeployModelRequest.oneofGroups_);
};
goog.inherits(proto.google.cloud.automl.v1beta1.DeployModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.DeployModelRequest.displayName = 'proto.google.cloud.automl.v1beta1.DeployModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.UndeployModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.UndeployModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.UndeployModelRequest.displayName = 'proto.google.cloud.automl.v1beta1.UndeployModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ExportModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ExportModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ExportModelRequest.displayName = 'proto.google.cloud.automl.v1beta1.ExportModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.displayName = 'proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.displayName = 'proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.displayName = 'proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.displayName = 'proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse';
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
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.CreateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.CreateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataset: (f = msg.getDataset()) && google_cloud_automl_v1beta1_dataset_pb.Dataset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.CreateDatasetRequest}
 */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.CreateDatasetRequest;
  return proto.google.cloud.automl.v1beta1.CreateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.CreateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.CreateDatasetRequest}
 */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_automl_v1beta1_dataset_pb.Dataset;
      reader.readMessage(value,google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinaryFromReader);
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
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.CreateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.CreateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
      google_cloud_automl_v1beta1_dataset_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Dataset dataset = 2;
 * @return {?proto.google.cloud.automl.v1beta1.Dataset}
 */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.Dataset} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_dataset_pb.Dataset, 2));
};


/** @param {?proto.google.cloud.automl.v1beta1.Dataset|undefined} value */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.CreateDatasetRequest.prototype.hasDataset = function() {
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
proto.google.cloud.automl.v1beta1.GetDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.GetDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.GetDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.automl.v1beta1.GetDatasetRequest}
 */
proto.google.cloud.automl.v1beta1.GetDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.GetDatasetRequest;
  return proto.google.cloud.automl.v1beta1.GetDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.GetDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.GetDatasetRequest}
 */
proto.google.cloud.automl.v1beta1.GetDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.automl.v1beta1.GetDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.GetDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.GetDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.automl.v1beta1.GetDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.GetDatasetRequest.prototype.setName = function(value) {
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
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ListDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ListDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.ListDatasetsRequest}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ListDatasetsRequest;
  return proto.google.cloud.automl.v1beta1.ListDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ListDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ListDatasetsRequest}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
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
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ListDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ListDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
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
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListDatasetsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ListDatasetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ListDatasetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    datasetsList: jspb.Message.toObjectList(msg.getDatasetsList(),
    google_cloud_automl_v1beta1_dataset_pb.Dataset.toObject, includeInstance),
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
 * @return {!proto.google.cloud.automl.v1beta1.ListDatasetsResponse}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ListDatasetsResponse;
  return proto.google.cloud.automl.v1beta1.ListDatasetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ListDatasetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ListDatasetsResponse}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_automl_v1beta1_dataset_pb.Dataset;
      reader.readMessage(value,google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinaryFromReader);
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
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ListDatasetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ListDatasetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_automl_v1beta1_dataset_pb.Dataset.serializeBinaryToWriter
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
 * @return {!Array<!proto.google.cloud.automl.v1beta1.Dataset>}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.prototype.getDatasetsList = function() {
  return /** @type{!Array<!proto.google.cloud.automl.v1beta1.Dataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_automl_v1beta1_dataset_pb.Dataset, 1));
};


/** @param {!Array<!proto.google.cloud.automl.v1beta1.Dataset>} value */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.prototype.setDatasetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.Dataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.automl.v1beta1.Dataset}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.prototype.addDatasets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.automl.v1beta1.Dataset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.prototype.clearDatasetsList = function() {
  this.setDatasetsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListDatasetsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.UpdateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataset: (f = msg.getDataset()) && google_cloud_automl_v1beta1_dataset_pb.Dataset.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.automl.v1beta1.UpdateDatasetRequest}
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.UpdateDatasetRequest;
  return proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.UpdateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.UpdateDatasetRequest}
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_automl_v1beta1_dataset_pb.Dataset;
      reader.readMessage(value,google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
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
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.UpdateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_automl_v1beta1_dataset_pb.Dataset.serializeBinaryToWriter
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
 * optional Dataset dataset = 1;
 * @return {?proto.google.cloud.automl.v1beta1.Dataset}
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.Dataset} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_dataset_pb.Dataset, 1));
};


/** @param {?proto.google.cloud.automl.v1beta1.Dataset|undefined} value */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.UpdateDatasetRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.DeleteDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.automl.v1beta1.DeleteDatasetRequest}
 */
proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.DeleteDatasetRequest;
  return proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.DeleteDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.DeleteDatasetRequest}
 */
proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.DeleteDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.DeleteDatasetRequest.prototype.setName = function(value) {
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
proto.google.cloud.automl.v1beta1.ImportDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ImportDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ImportDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ImportDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inputConfig: (f = msg.getInputConfig()) && google_cloud_automl_v1beta1_io_pb.InputConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.ImportDataRequest}
 */
proto.google.cloud.automl.v1beta1.ImportDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ImportDataRequest;
  return proto.google.cloud.automl.v1beta1.ImportDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ImportDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ImportDataRequest}
 */
proto.google.cloud.automl.v1beta1.ImportDataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_automl_v1beta1_io_pb.InputConfig;
      reader.readMessage(value,google_cloud_automl_v1beta1_io_pb.InputConfig.deserializeBinaryFromReader);
      msg.setInputConfig(value);
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
proto.google.cloud.automl.v1beta1.ImportDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ImportDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ImportDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ImportDataRequest.serializeBinaryToWriter = function(message, writer) {
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
      3,
      f,
      google_cloud_automl_v1beta1_io_pb.InputConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ImportDataRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ImportDataRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional InputConfig input_config = 3;
 * @return {?proto.google.cloud.automl.v1beta1.InputConfig}
 */
proto.google.cloud.automl.v1beta1.ImportDataRequest.prototype.getInputConfig = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.InputConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_io_pb.InputConfig, 3));
};


/** @param {?proto.google.cloud.automl.v1beta1.InputConfig|undefined} value */
proto.google.cloud.automl.v1beta1.ImportDataRequest.prototype.setInputConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.ImportDataRequest.prototype.clearInputConfig = function() {
  this.setInputConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.ImportDataRequest.prototype.hasInputConfig = function() {
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
proto.google.cloud.automl.v1beta1.ExportDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ExportDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ExportDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ExportDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outputConfig: (f = msg.getOutputConfig()) && google_cloud_automl_v1beta1_io_pb.OutputConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.ExportDataRequest}
 */
proto.google.cloud.automl.v1beta1.ExportDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ExportDataRequest;
  return proto.google.cloud.automl.v1beta1.ExportDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ExportDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ExportDataRequest}
 */
proto.google.cloud.automl.v1beta1.ExportDataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_automl_v1beta1_io_pb.OutputConfig;
      reader.readMessage(value,google_cloud_automl_v1beta1_io_pb.OutputConfig.deserializeBinaryFromReader);
      msg.setOutputConfig(value);
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
proto.google.cloud.automl.v1beta1.ExportDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ExportDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ExportDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ExportDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutputConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_cloud_automl_v1beta1_io_pb.OutputConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ExportDataRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ExportDataRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OutputConfig output_config = 3;
 * @return {?proto.google.cloud.automl.v1beta1.OutputConfig}
 */
proto.google.cloud.automl.v1beta1.ExportDataRequest.prototype.getOutputConfig = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.OutputConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_io_pb.OutputConfig, 3));
};


/** @param {?proto.google.cloud.automl.v1beta1.OutputConfig|undefined} value */
proto.google.cloud.automl.v1beta1.ExportDataRequest.prototype.setOutputConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.ExportDataRequest.prototype.clearOutputConfig = function() {
  this.setOutputConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.ExportDataRequest.prototype.hasOutputConfig = function() {
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
proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest}
 */
proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest;
  return proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest}
 */
proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.GetAnnotationSpecRequest.prototype.setName = function(value) {
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
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.GetTableSpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.GetTableSpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.GetTableSpecRequest}
 */
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.GetTableSpecRequest;
  return proto.google.cloud.automl.v1beta1.GetTableSpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.GetTableSpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.GetTableSpecRequest}
 */
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFieldMask(value);
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
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.GetTableSpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.GetTableSpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldMask();
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
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.prototype.setFieldMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.prototype.clearFieldMask = function() {
  this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.GetTableSpecRequest.prototype.hasFieldMask = function() {
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
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ListTableSpecsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.ListTableSpecsRequest}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ListTableSpecsRequest;
  return proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ListTableSpecsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ListTableSpecsRequest}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
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
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ListTableSpecsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.setFieldMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.clearFieldMask = function() {
  this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListTableSpecsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ListTableSpecsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableSpecsList: jspb.Message.toObjectList(msg.getTableSpecsList(),
    google_cloud_automl_v1beta1_table_spec_pb.TableSpec.toObject, includeInstance),
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
 * @return {!proto.google.cloud.automl.v1beta1.ListTableSpecsResponse}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ListTableSpecsResponse;
  return proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ListTableSpecsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ListTableSpecsResponse}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_automl_v1beta1_table_spec_pb.TableSpec;
      reader.readMessage(value,google_cloud_automl_v1beta1_table_spec_pb.TableSpec.deserializeBinaryFromReader);
      msg.addTableSpecs(value);
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
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ListTableSpecsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_automl_v1beta1_table_spec_pb.TableSpec.serializeBinaryToWriter
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
 * repeated TableSpec table_specs = 1;
 * @return {!Array<!proto.google.cloud.automl.v1beta1.TableSpec>}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.prototype.getTableSpecsList = function() {
  return /** @type{!Array<!proto.google.cloud.automl.v1beta1.TableSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_automl_v1beta1_table_spec_pb.TableSpec, 1));
};


/** @param {!Array<!proto.google.cloud.automl.v1beta1.TableSpec>} value */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.prototype.setTableSpecsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.TableSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.automl.v1beta1.TableSpec}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.prototype.addTableSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.automl.v1beta1.TableSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.prototype.clearTableSpecsList = function() {
  this.setTableSpecsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListTableSpecsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableSpec: (f = msg.getTableSpec()) && google_cloud_automl_v1beta1_table_spec_pb.TableSpec.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest}
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest;
  return proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest}
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_automl_v1beta1_table_spec_pb.TableSpec;
      reader.readMessage(value,google_cloud_automl_v1beta1_table_spec_pb.TableSpec.deserializeBinaryFromReader);
      msg.setTableSpec(value);
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
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_automl_v1beta1_table_spec_pb.TableSpec.serializeBinaryToWriter
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
 * optional TableSpec table_spec = 1;
 * @return {?proto.google.cloud.automl.v1beta1.TableSpec}
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.prototype.getTableSpec = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.TableSpec} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_table_spec_pb.TableSpec, 1));
};


/** @param {?proto.google.cloud.automl.v1beta1.TableSpec|undefined} value */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.prototype.setTableSpec = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.prototype.clearTableSpec = function() {
  this.setTableSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.prototype.hasTableSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.UpdateTableSpecRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.GetColumnSpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.GetColumnSpecRequest}
 */
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.GetColumnSpecRequest;
  return proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.GetColumnSpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.GetColumnSpecRequest}
 */
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFieldMask(value);
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
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.GetColumnSpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldMask();
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
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.prototype.setFieldMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.prototype.clearFieldMask = function() {
  this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.GetColumnSpecRequest.prototype.hasFieldMask = function() {
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
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest;
  return proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
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
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.setFieldMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.clearFieldMask = function() {
  this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListColumnSpecsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnSpecsList: jspb.Message.toObjectList(msg.getColumnSpecsList(),
    google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.toObject, includeInstance),
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
 * @return {!proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse;
  return proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec;
      reader.readMessage(value,google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.deserializeBinaryFromReader);
      msg.addColumnSpecs(value);
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
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.serializeBinaryToWriter
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
 * repeated ColumnSpec column_specs = 1;
 * @return {!Array<!proto.google.cloud.automl.v1beta1.ColumnSpec>}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.prototype.getColumnSpecsList = function() {
  return /** @type{!Array<!proto.google.cloud.automl.v1beta1.ColumnSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec, 1));
};


/** @param {!Array<!proto.google.cloud.automl.v1beta1.ColumnSpec>} value */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.prototype.setColumnSpecsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.ColumnSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.automl.v1beta1.ColumnSpec}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.prototype.addColumnSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.automl.v1beta1.ColumnSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.prototype.clearColumnSpecsList = function() {
  this.setColumnSpecsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListColumnSpecsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnSpec: (f = msg.getColumnSpec()) && google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest}
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest;
  return proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest}
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec;
      reader.readMessage(value,google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.deserializeBinaryFromReader);
      msg.setColumnSpec(value);
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
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.serializeBinaryToWriter
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
 * optional ColumnSpec column_spec = 1;
 * @return {?proto.google.cloud.automl.v1beta1.ColumnSpec}
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.prototype.getColumnSpec = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.ColumnSpec} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec, 1));
};


/** @param {?proto.google.cloud.automl.v1beta1.ColumnSpec|undefined} value */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.prototype.setColumnSpec = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.prototype.clearColumnSpec = function() {
  this.setColumnSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.prototype.hasColumnSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.UpdateColumnSpecRequest.prototype.hasUpdateMask = function() {
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
proto.google.cloud.automl.v1beta1.CreateModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.CreateModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.CreateModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.CreateModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    model: (f = msg.getModel()) && google_cloud_automl_v1beta1_model_pb.Model.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.CreateModelRequest}
 */
proto.google.cloud.automl.v1beta1.CreateModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.CreateModelRequest;
  return proto.google.cloud.automl.v1beta1.CreateModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.CreateModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.CreateModelRequest}
 */
proto.google.cloud.automl.v1beta1.CreateModelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new google_cloud_automl_v1beta1_model_pb.Model;
      reader.readMessage(value,google_cloud_automl_v1beta1_model_pb.Model.deserializeBinaryFromReader);
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
proto.google.cloud.automl.v1beta1.CreateModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.CreateModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.CreateModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.CreateModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_cloud_automl_v1beta1_model_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.CreateModelRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.CreateModelRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Model model = 4;
 * @return {?proto.google.cloud.automl.v1beta1.Model}
 */
proto.google.cloud.automl.v1beta1.CreateModelRequest.prototype.getModel = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.Model} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_model_pb.Model, 4));
};


/** @param {?proto.google.cloud.automl.v1beta1.Model|undefined} value */
proto.google.cloud.automl.v1beta1.CreateModelRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.CreateModelRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.CreateModelRequest.prototype.hasModel = function() {
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
proto.google.cloud.automl.v1beta1.GetModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.GetModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.GetModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetModelRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.automl.v1beta1.GetModelRequest}
 */
proto.google.cloud.automl.v1beta1.GetModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.GetModelRequest;
  return proto.google.cloud.automl.v1beta1.GetModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.GetModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.GetModelRequest}
 */
proto.google.cloud.automl.v1beta1.GetModelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.automl.v1beta1.GetModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.GetModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.GetModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetModelRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.automl.v1beta1.GetModelRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.GetModelRequest.prototype.setName = function(value) {
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
proto.google.cloud.automl.v1beta1.ListModelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ListModelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ListModelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListModelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.ListModelsRequest}
 */
proto.google.cloud.automl.v1beta1.ListModelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ListModelsRequest;
  return proto.google.cloud.automl.v1beta1.ListModelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ListModelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ListModelsRequest}
 */
proto.google.cloud.automl.v1beta1.ListModelsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
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
proto.google.cloud.automl.v1beta1.ListModelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ListModelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ListModelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListModelsRequest.serializeBinaryToWriter = function(message, writer) {
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
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListModelsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListModelsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListModelsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListModelsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.ListModelsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.ListModelsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListModelsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListModelsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ListModelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ListModelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelList: jspb.Message.toObjectList(msg.getModelList(),
    google_cloud_automl_v1beta1_model_pb.Model.toObject, includeInstance),
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
 * @return {!proto.google.cloud.automl.v1beta1.ListModelsResponse}
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ListModelsResponse;
  return proto.google.cloud.automl.v1beta1.ListModelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ListModelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ListModelsResponse}
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_automl_v1beta1_model_pb.Model;
      reader.readMessage(value,google_cloud_automl_v1beta1_model_pb.Model.deserializeBinaryFromReader);
      msg.addModel(value);
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
proto.google.cloud.automl.v1beta1.ListModelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ListModelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ListModelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_automl_v1beta1_model_pb.Model.serializeBinaryToWriter
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
 * repeated Model model = 1;
 * @return {!Array<!proto.google.cloud.automl.v1beta1.Model>}
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse.prototype.getModelList = function() {
  return /** @type{!Array<!proto.google.cloud.automl.v1beta1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_automl_v1beta1_model_pb.Model, 1));
};


/** @param {!Array<!proto.google.cloud.automl.v1beta1.Model>} value */
proto.google.cloud.automl.v1beta1.ListModelsResponse.prototype.setModelList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.automl.v1beta1.Model}
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse.prototype.addModel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.automl.v1beta1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse.prototype.clearModelList = function() {
  this.setModelList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListModelsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListModelsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.cloud.automl.v1beta1.DeleteModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.DeleteModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.DeleteModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.DeleteModelRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.automl.v1beta1.DeleteModelRequest}
 */
proto.google.cloud.automl.v1beta1.DeleteModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.DeleteModelRequest;
  return proto.google.cloud.automl.v1beta1.DeleteModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.DeleteModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.DeleteModelRequest}
 */
proto.google.cloud.automl.v1beta1.DeleteModelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.automl.v1beta1.DeleteModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.DeleteModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.DeleteModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.DeleteModelRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.automl.v1beta1.DeleteModelRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.DeleteModelRequest.prototype.setName = function(value) {
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
proto.google.cloud.automl.v1beta1.DeployModelRequest.oneofGroups_ = [[2,4]];

/**
 * @enum {number}
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.ModelDeploymentMetadataCase = {
  MODEL_DEPLOYMENT_METADATA_NOT_SET: 0,
  IMAGE_OBJECT_DETECTION_MODEL_DEPLOYMENT_METADATA: 2,
  IMAGE_CLASSIFICATION_MODEL_DEPLOYMENT_METADATA: 4
};

/**
 * @return {proto.google.cloud.automl.v1beta1.DeployModelRequest.ModelDeploymentMetadataCase}
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.getModelDeploymentMetadataCase = function() {
  return /** @type {proto.google.cloud.automl.v1beta1.DeployModelRequest.ModelDeploymentMetadataCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.automl.v1beta1.DeployModelRequest.oneofGroups_[0]));
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
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.DeployModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.DeployModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageObjectDetectionModelDeploymentMetadata: (f = msg.getImageObjectDetectionModelDeploymentMetadata()) && google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelDeploymentMetadata.toObject(includeInstance, f),
    imageClassificationModelDeploymentMetadata: (f = msg.getImageClassificationModelDeploymentMetadata()) && google_cloud_automl_v1beta1_image_pb.ImageClassificationModelDeploymentMetadata.toObject(includeInstance, f),
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
 * @return {!proto.google.cloud.automl.v1beta1.DeployModelRequest}
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.DeployModelRequest;
  return proto.google.cloud.automl.v1beta1.DeployModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.DeployModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.DeployModelRequest}
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelDeploymentMetadata;
      reader.readMessage(value,google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelDeploymentMetadata.deserializeBinaryFromReader);
      msg.setImageObjectDetectionModelDeploymentMetadata(value);
      break;
    case 4:
      var value = new google_cloud_automl_v1beta1_image_pb.ImageClassificationModelDeploymentMetadata;
      reader.readMessage(value,google_cloud_automl_v1beta1_image_pb.ImageClassificationModelDeploymentMetadata.deserializeBinaryFromReader);
      msg.setImageClassificationModelDeploymentMetadata(value);
      break;
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
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.DeployModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.DeployModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImageObjectDetectionModelDeploymentMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelDeploymentMetadata.serializeBinaryToWriter
    );
  }
  f = message.getImageClassificationModelDeploymentMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_cloud_automl_v1beta1_image_pb.ImageClassificationModelDeploymentMetadata.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional ImageObjectDetectionModelDeploymentMetadata image_object_detection_model_deployment_metadata = 2;
 * @return {?proto.google.cloud.automl.v1beta1.ImageObjectDetectionModelDeploymentMetadata}
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.getImageObjectDetectionModelDeploymentMetadata = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.ImageObjectDetectionModelDeploymentMetadata} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelDeploymentMetadata, 2));
};


/** @param {?proto.google.cloud.automl.v1beta1.ImageObjectDetectionModelDeploymentMetadata|undefined} value */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.setImageObjectDetectionModelDeploymentMetadata = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.google.cloud.automl.v1beta1.DeployModelRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.clearImageObjectDetectionModelDeploymentMetadata = function() {
  this.setImageObjectDetectionModelDeploymentMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.hasImageObjectDetectionModelDeploymentMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageClassificationModelDeploymentMetadata image_classification_model_deployment_metadata = 4;
 * @return {?proto.google.cloud.automl.v1beta1.ImageClassificationModelDeploymentMetadata}
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.getImageClassificationModelDeploymentMetadata = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.ImageClassificationModelDeploymentMetadata} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_image_pb.ImageClassificationModelDeploymentMetadata, 4));
};


/** @param {?proto.google.cloud.automl.v1beta1.ImageClassificationModelDeploymentMetadata|undefined} value */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.setImageClassificationModelDeploymentMetadata = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.google.cloud.automl.v1beta1.DeployModelRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.clearImageClassificationModelDeploymentMetadata = function() {
  this.setImageClassificationModelDeploymentMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.hasImageClassificationModelDeploymentMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.DeployModelRequest.prototype.setName = function(value) {
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
proto.google.cloud.automl.v1beta1.UndeployModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.UndeployModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.UndeployModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.UndeployModelRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.automl.v1beta1.UndeployModelRequest}
 */
proto.google.cloud.automl.v1beta1.UndeployModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.UndeployModelRequest;
  return proto.google.cloud.automl.v1beta1.UndeployModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.UndeployModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.UndeployModelRequest}
 */
proto.google.cloud.automl.v1beta1.UndeployModelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.automl.v1beta1.UndeployModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.UndeployModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.UndeployModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.UndeployModelRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.automl.v1beta1.UndeployModelRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.UndeployModelRequest.prototype.setName = function(value) {
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
proto.google.cloud.automl.v1beta1.ExportModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ExportModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ExportModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ExportModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outputConfig: (f = msg.getOutputConfig()) && google_cloud_automl_v1beta1_io_pb.ModelExportOutputConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.ExportModelRequest}
 */
proto.google.cloud.automl.v1beta1.ExportModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ExportModelRequest;
  return proto.google.cloud.automl.v1beta1.ExportModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ExportModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ExportModelRequest}
 */
proto.google.cloud.automl.v1beta1.ExportModelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_automl_v1beta1_io_pb.ModelExportOutputConfig;
      reader.readMessage(value,google_cloud_automl_v1beta1_io_pb.ModelExportOutputConfig.deserializeBinaryFromReader);
      msg.setOutputConfig(value);
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
proto.google.cloud.automl.v1beta1.ExportModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ExportModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ExportModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ExportModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutputConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_cloud_automl_v1beta1_io_pb.ModelExportOutputConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ExportModelRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ExportModelRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ModelExportOutputConfig output_config = 3;
 * @return {?proto.google.cloud.automl.v1beta1.ModelExportOutputConfig}
 */
proto.google.cloud.automl.v1beta1.ExportModelRequest.prototype.getOutputConfig = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.ModelExportOutputConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_io_pb.ModelExportOutputConfig, 3));
};


/** @param {?proto.google.cloud.automl.v1beta1.ModelExportOutputConfig|undefined} value */
proto.google.cloud.automl.v1beta1.ExportModelRequest.prototype.setOutputConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.ExportModelRequest.prototype.clearOutputConfig = function() {
  this.setOutputConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.ExportModelRequest.prototype.hasOutputConfig = function() {
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
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outputConfig: (f = msg.getOutputConfig()) && google_cloud_automl_v1beta1_io_pb.ExportEvaluatedExamplesOutputConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest}
 */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest;
  return proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest}
 */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_automl_v1beta1_io_pb.ExportEvaluatedExamplesOutputConfig;
      reader.readMessage(value,google_cloud_automl_v1beta1_io_pb.ExportEvaluatedExamplesOutputConfig.deserializeBinaryFromReader);
      msg.setOutputConfig(value);
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
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutputConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_cloud_automl_v1beta1_io_pb.ExportEvaluatedExamplesOutputConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ExportEvaluatedExamplesOutputConfig output_config = 3;
 * @return {?proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesOutputConfig}
 */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.prototype.getOutputConfig = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesOutputConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_io_pb.ExportEvaluatedExamplesOutputConfig, 3));
};


/** @param {?proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesOutputConfig|undefined} value */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.prototype.setOutputConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.prototype.clearOutputConfig = function() {
  this.setOutputConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest.prototype.hasOutputConfig = function() {
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
proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest}
 */
proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest;
  return proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest}
 */
proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest.prototype.setName = function(value) {
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
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest;
  return proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
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
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.serializeBinaryToWriter = function(message, writer) {
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
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelEvaluationList: jspb.Message.toObjectList(msg.getModelEvaluationList(),
    google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation.toObject, includeInstance),
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
 * @return {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse;
  return proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation;
      reader.readMessage(value,google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation.deserializeBinaryFromReader);
      msg.addModelEvaluation(value);
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
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelEvaluationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation.serializeBinaryToWriter
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
 * repeated ModelEvaluation model_evaluation = 1;
 * @return {!Array<!proto.google.cloud.automl.v1beta1.ModelEvaluation>}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.prototype.getModelEvaluationList = function() {
  return /** @type{!Array<!proto.google.cloud.automl.v1beta1.ModelEvaluation>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation, 1));
};


/** @param {!Array<!proto.google.cloud.automl.v1beta1.ModelEvaluation>} value */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.prototype.setModelEvaluationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.ModelEvaluation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.automl.v1beta1.ModelEvaluation}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.prototype.addModelEvaluation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.automl.v1beta1.ModelEvaluation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.prototype.clearModelEvaluationList = function() {
  this.setModelEvaluationList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.google.cloud.automl.v1beta1);
