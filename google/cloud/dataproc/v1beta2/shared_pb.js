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
goog.exportSymbol('proto.google.cloud.dataproc.v1beta2.Component', null, global);
/**
 * @enum {number}
 */
proto.google.cloud.dataproc.v1beta2.Component = {
  COMPONENT_UNSPECIFIED: 0,
  ANACONDA: 5,
  DRUID: 9,
  HIVE_WEBHCAT: 3,
  JUPYTER: 1,
  KERBEROS: 7,
  PRESTO: 6,
  ZEPPELIN: 4,
  ZOOKEEPER: 8
};

goog.object.extend(exports, proto.google.cloud.dataproc.v1beta2);
