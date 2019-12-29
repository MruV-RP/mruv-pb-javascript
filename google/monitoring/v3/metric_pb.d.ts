// package: google.monitoring.v3
// file: google/monitoring/v3/metric.proto

import * as jspb from "google-protobuf";
import * as google_api_distribution_pb from "../../../google/api/distribution_pb";
import * as google_api_label_pb from "../../../google/api/label_pb";
import * as google_api_metric_pb from "../../../google/api/metric_pb";
import * as google_api_monitored_resource_pb from "../../../google/api/monitored_resource_pb";
import * as google_monitoring_v3_common_pb from "../../../google/monitoring/v3/common_pb";

export class Point extends jspb.Message {
  hasInterval(): boolean;
  clearInterval(): void;
  getInterval(): google_monitoring_v3_common_pb.TimeInterval | undefined;
  setInterval(value?: google_monitoring_v3_common_pb.TimeInterval): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_monitoring_v3_common_pb.TypedValue | undefined;
  setValue(value?: google_monitoring_v3_common_pb.TypedValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    interval?: google_monitoring_v3_common_pb.TimeInterval.AsObject,
    value?: google_monitoring_v3_common_pb.TypedValue.AsObject,
  }
}

export class TimeSeries extends jspb.Message {
  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): google_api_metric_pb.Metric | undefined;
  setMetric(value?: google_api_metric_pb.Metric): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): google_api_monitored_resource_pb.MonitoredResource | undefined;
  setResource(value?: google_api_monitored_resource_pb.MonitoredResource): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_api_monitored_resource_pb.MonitoredResourceMetadata | undefined;
  setMetadata(value?: google_api_monitored_resource_pb.MonitoredResourceMetadata): void;

  getMetricKind(): google_api_metric_pb.MetricDescriptor.MetricKindMap[keyof google_api_metric_pb.MetricDescriptor.MetricKindMap];
  setMetricKind(value: google_api_metric_pb.MetricDescriptor.MetricKindMap[keyof google_api_metric_pb.MetricDescriptor.MetricKindMap]): void;

  getValueType(): google_api_metric_pb.MetricDescriptor.ValueTypeMap[keyof google_api_metric_pb.MetricDescriptor.ValueTypeMap];
  setValueType(value: google_api_metric_pb.MetricDescriptor.ValueTypeMap[keyof google_api_metric_pb.MetricDescriptor.ValueTypeMap]): void;

  clearPointsList(): void;
  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): void;
  addPoints(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeries.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeries): TimeSeries.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeries;
  static deserializeBinaryFromReader(message: TimeSeries, reader: jspb.BinaryReader): TimeSeries;
}

export namespace TimeSeries {
  export type AsObject = {
    metric?: google_api_metric_pb.Metric.AsObject,
    resource?: google_api_monitored_resource_pb.MonitoredResource.AsObject,
    metadata?: google_api_monitored_resource_pb.MonitoredResourceMetadata.AsObject,
    metricKind: google_api_metric_pb.MetricDescriptor.MetricKindMap[keyof google_api_metric_pb.MetricDescriptor.MetricKindMap],
    valueType: google_api_metric_pb.MetricDescriptor.ValueTypeMap[keyof google_api_metric_pb.MetricDescriptor.ValueTypeMap],
    pointsList: Array<Point.AsObject>,
  }
}

