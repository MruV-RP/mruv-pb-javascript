// package: google.monitoring.v3
// file: google/monitoring/v3/service.proto

import * as jspb from "google-protobuf";
import * as google_api_monitored_resource_pb from "../../../google/api/monitored_resource_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_calendar_period_pb from "../../../google/type/calendar_period_pb";

export class Service extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  hasCustom(): boolean;
  clearCustom(): void;
  getCustom(): Service.Custom | undefined;
  setCustom(value?: Service.Custom): void;

  hasAppEngine(): boolean;
  clearAppEngine(): void;
  getAppEngine(): Service.AppEngine | undefined;
  setAppEngine(value?: Service.AppEngine): void;

  hasCloudEndpoints(): boolean;
  clearCloudEndpoints(): void;
  getCloudEndpoints(): Service.CloudEndpoints | undefined;
  setCloudEndpoints(value?: Service.CloudEndpoints): void;

  hasClusterIstio(): boolean;
  clearClusterIstio(): void;
  getClusterIstio(): Service.ClusterIstio | undefined;
  setClusterIstio(value?: Service.ClusterIstio): void;

  hasTelemetry(): boolean;
  clearTelemetry(): void;
  getTelemetry(): Service.Telemetry | undefined;
  setTelemetry(value?: Service.Telemetry): void;

  getIdentifierCase(): Service.IdentifierCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    name: string,
    displayName: string,
    custom?: Service.Custom.AsObject,
    appEngine?: Service.AppEngine.AsObject,
    cloudEndpoints?: Service.CloudEndpoints.AsObject,
    clusterIstio?: Service.ClusterIstio.AsObject,
    telemetry?: Service.Telemetry.AsObject,
  }

  export class Custom extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Custom.AsObject;
    static toObject(includeInstance: boolean, msg: Custom): Custom.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Custom, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Custom;
    static deserializeBinaryFromReader(message: Custom, reader: jspb.BinaryReader): Custom;
  }

  export namespace Custom {
    export type AsObject = {
    }
  }

  export class AppEngine extends jspb.Message {
    getModuleId(): string;
    setModuleId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppEngine.AsObject;
    static toObject(includeInstance: boolean, msg: AppEngine): AppEngine.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppEngine, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppEngine;
    static deserializeBinaryFromReader(message: AppEngine, reader: jspb.BinaryReader): AppEngine;
  }

  export namespace AppEngine {
    export type AsObject = {
      moduleId: string,
    }
  }

  export class CloudEndpoints extends jspb.Message {
    getService(): string;
    setService(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudEndpoints.AsObject;
    static toObject(includeInstance: boolean, msg: CloudEndpoints): CloudEndpoints.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudEndpoints, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudEndpoints;
    static deserializeBinaryFromReader(message: CloudEndpoints, reader: jspb.BinaryReader): CloudEndpoints;
  }

  export namespace CloudEndpoints {
    export type AsObject = {
      service: string,
    }
  }

  export class ClusterIstio extends jspb.Message {
    getLocation(): string;
    setLocation(value: string): void;

    getClusterName(): string;
    setClusterName(value: string): void;

    getServiceNamespace(): string;
    setServiceNamespace(value: string): void;

    getServiceName(): string;
    setServiceName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClusterIstio.AsObject;
    static toObject(includeInstance: boolean, msg: ClusterIstio): ClusterIstio.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClusterIstio, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClusterIstio;
    static deserializeBinaryFromReader(message: ClusterIstio, reader: jspb.BinaryReader): ClusterIstio;
  }

  export namespace ClusterIstio {
    export type AsObject = {
      location: string,
      clusterName: string,
      serviceNamespace: string,
      serviceName: string,
    }
  }

  export class Telemetry extends jspb.Message {
    getResourceName(): string;
    setResourceName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Telemetry.AsObject;
    static toObject(includeInstance: boolean, msg: Telemetry): Telemetry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Telemetry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Telemetry;
    static deserializeBinaryFromReader(message: Telemetry, reader: jspb.BinaryReader): Telemetry;
  }

  export namespace Telemetry {
    export type AsObject = {
      resourceName: string,
    }
  }

  export enum IdentifierCase {
    IDENTIFIER_NOT_SET = 0,
    CUSTOM = 6,
    APP_ENGINE = 7,
    CLOUD_ENDPOINTS = 8,
    CLUSTER_ISTIO = 9,
  }
}

export class ServiceLevelObjective extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  hasServiceLevelIndicator(): boolean;
  clearServiceLevelIndicator(): void;
  getServiceLevelIndicator(): ServiceLevelIndicator | undefined;
  setServiceLevelIndicator(value?: ServiceLevelIndicator): void;

  getGoal(): number;
  setGoal(value: number): void;

  hasRollingPeriod(): boolean;
  clearRollingPeriod(): void;
  getRollingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setRollingPeriod(value?: google_protobuf_duration_pb.Duration): void;

  hasCalendarPeriod(): boolean;
  clearCalendarPeriod(): void;
  getCalendarPeriod(): google_type_calendar_period_pb.CalendarPeriodMap[keyof google_type_calendar_period_pb.CalendarPeriodMap];
  setCalendarPeriod(value: google_type_calendar_period_pb.CalendarPeriodMap[keyof google_type_calendar_period_pb.CalendarPeriodMap]): void;

  getPeriodCase(): ServiceLevelObjective.PeriodCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceLevelObjective.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceLevelObjective): ServiceLevelObjective.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceLevelObjective, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceLevelObjective;
  static deserializeBinaryFromReader(message: ServiceLevelObjective, reader: jspb.BinaryReader): ServiceLevelObjective;
}

export namespace ServiceLevelObjective {
  export type AsObject = {
    name: string,
    displayName: string,
    serviceLevelIndicator?: ServiceLevelIndicator.AsObject,
    goal: number,
    rollingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    calendarPeriod: google_type_calendar_period_pb.CalendarPeriodMap[keyof google_type_calendar_period_pb.CalendarPeriodMap],
  }

  export interface ViewMap {
    VIEW_UNSPECIFIED: 0;
    FULL: 2;
    EXPLICIT: 1;
  }

  export const View: ViewMap;

  export enum PeriodCase {
    PERIOD_NOT_SET = 0,
    ROLLING_PERIOD = 5,
    CALENDAR_PERIOD = 6,
  }
}

export class ServiceLevelIndicator extends jspb.Message {
  hasBasicSli(): boolean;
  clearBasicSli(): void;
  getBasicSli(): BasicSli | undefined;
  setBasicSli(value?: BasicSli): void;

  hasRequestBased(): boolean;
  clearRequestBased(): void;
  getRequestBased(): RequestBasedSli | undefined;
  setRequestBased(value?: RequestBasedSli): void;

  hasWindowsBased(): boolean;
  clearWindowsBased(): void;
  getWindowsBased(): WindowsBasedSli | undefined;
  setWindowsBased(value?: WindowsBasedSli): void;

  getTypeCase(): ServiceLevelIndicator.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceLevelIndicator.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceLevelIndicator): ServiceLevelIndicator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceLevelIndicator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceLevelIndicator;
  static deserializeBinaryFromReader(message: ServiceLevelIndicator, reader: jspb.BinaryReader): ServiceLevelIndicator;
}

export namespace ServiceLevelIndicator {
  export type AsObject = {
    basicSli?: BasicSli.AsObject,
    requestBased?: RequestBasedSli.AsObject,
    windowsBased?: WindowsBasedSli.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    BASIC_SLI = 4,
    REQUEST_BASED = 1,
    WINDOWS_BASED = 2,
  }
}

export class BasicSli extends jspb.Message {
  clearMethodList(): void;
  getMethodList(): Array<string>;
  setMethodList(value: Array<string>): void;
  addMethod(value: string, index?: number): string;

  clearLocationList(): void;
  getLocationList(): Array<string>;
  setLocationList(value: Array<string>): void;
  addLocation(value: string, index?: number): string;

  clearVersionList(): void;
  getVersionList(): Array<string>;
  setVersionList(value: Array<string>): void;
  addVersion(value: string, index?: number): string;

  hasAvailability(): boolean;
  clearAvailability(): void;
  getAvailability(): BasicSli.AvailabilityCriteria | undefined;
  setAvailability(value?: BasicSli.AvailabilityCriteria): void;

  hasLatency(): boolean;
  clearLatency(): void;
  getLatency(): BasicSli.LatencyCriteria | undefined;
  setLatency(value?: BasicSli.LatencyCriteria): void;

  getSliCriteriaCase(): BasicSli.SliCriteriaCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicSli.AsObject;
  static toObject(includeInstance: boolean, msg: BasicSli): BasicSli.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicSli, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicSli;
  static deserializeBinaryFromReader(message: BasicSli, reader: jspb.BinaryReader): BasicSli;
}

export namespace BasicSli {
  export type AsObject = {
    methodList: Array<string>,
    locationList: Array<string>,
    versionList: Array<string>,
    availability?: BasicSli.AvailabilityCriteria.AsObject,
    latency?: BasicSli.LatencyCriteria.AsObject,
  }

  export class AvailabilityCriteria extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvailabilityCriteria.AsObject;
    static toObject(includeInstance: boolean, msg: AvailabilityCriteria): AvailabilityCriteria.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvailabilityCriteria, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvailabilityCriteria;
    static deserializeBinaryFromReader(message: AvailabilityCriteria, reader: jspb.BinaryReader): AvailabilityCriteria;
  }

  export namespace AvailabilityCriteria {
    export type AsObject = {
    }
  }

  export class LatencyCriteria extends jspb.Message {
    hasThreshold(): boolean;
    clearThreshold(): void;
    getThreshold(): google_protobuf_duration_pb.Duration | undefined;
    setThreshold(value?: google_protobuf_duration_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LatencyCriteria.AsObject;
    static toObject(includeInstance: boolean, msg: LatencyCriteria): LatencyCriteria.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LatencyCriteria, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LatencyCriteria;
    static deserializeBinaryFromReader(message: LatencyCriteria, reader: jspb.BinaryReader): LatencyCriteria;
  }

  export namespace LatencyCriteria {
    export type AsObject = {
      threshold?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }

  export enum SliCriteriaCase {
    SLI_CRITERIA_NOT_SET = 0,
    AVAILABILITY = 2,
    LATENCY = 3,
  }
}

export class Range extends jspb.Message {
  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Range.AsObject;
  static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Range;
  static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
  export type AsObject = {
    min: number,
    max: number,
  }
}

export class RequestBasedSli extends jspb.Message {
  hasGoodTotalRatio(): boolean;
  clearGoodTotalRatio(): void;
  getGoodTotalRatio(): TimeSeriesRatio | undefined;
  setGoodTotalRatio(value?: TimeSeriesRatio): void;

  hasDistributionCut(): boolean;
  clearDistributionCut(): void;
  getDistributionCut(): DistributionCut | undefined;
  setDistributionCut(value?: DistributionCut): void;

  getMethodCase(): RequestBasedSli.MethodCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestBasedSli.AsObject;
  static toObject(includeInstance: boolean, msg: RequestBasedSli): RequestBasedSli.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestBasedSli, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestBasedSli;
  static deserializeBinaryFromReader(message: RequestBasedSli, reader: jspb.BinaryReader): RequestBasedSli;
}

export namespace RequestBasedSli {
  export type AsObject = {
    goodTotalRatio?: TimeSeriesRatio.AsObject,
    distributionCut?: DistributionCut.AsObject,
  }

  export enum MethodCase {
    METHOD_NOT_SET = 0,
    GOOD_TOTAL_RATIO = 1,
    DISTRIBUTION_CUT = 3,
  }
}

export class TimeSeriesRatio extends jspb.Message {
  getGoodServiceFilter(): string;
  setGoodServiceFilter(value: string): void;

  getBadServiceFilter(): string;
  setBadServiceFilter(value: string): void;

  getTotalServiceFilter(): string;
  setTotalServiceFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeriesRatio.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeriesRatio): TimeSeriesRatio.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeSeriesRatio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeriesRatio;
  static deserializeBinaryFromReader(message: TimeSeriesRatio, reader: jspb.BinaryReader): TimeSeriesRatio;
}

export namespace TimeSeriesRatio {
  export type AsObject = {
    goodServiceFilter: string,
    badServiceFilter: string,
    totalServiceFilter: string,
  }
}

export class DistributionCut extends jspb.Message {
  getDistributionFilter(): string;
  setDistributionFilter(value: string): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): Range | undefined;
  setRange(value?: Range): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistributionCut.AsObject;
  static toObject(includeInstance: boolean, msg: DistributionCut): DistributionCut.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DistributionCut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistributionCut;
  static deserializeBinaryFromReader(message: DistributionCut, reader: jspb.BinaryReader): DistributionCut;
}

export namespace DistributionCut {
  export type AsObject = {
    distributionFilter: string,
    range?: Range.AsObject,
  }
}

export class WindowsBasedSli extends jspb.Message {
  hasGoodBadMetricFilter(): boolean;
  clearGoodBadMetricFilter(): void;
  getGoodBadMetricFilter(): string;
  setGoodBadMetricFilter(value: string): void;

  hasGoodTotalRatioThreshold(): boolean;
  clearGoodTotalRatioThreshold(): void;
  getGoodTotalRatioThreshold(): WindowsBasedSli.PerformanceThreshold | undefined;
  setGoodTotalRatioThreshold(value?: WindowsBasedSli.PerformanceThreshold): void;

  hasMetricMeanInRange(): boolean;
  clearMetricMeanInRange(): void;
  getMetricMeanInRange(): WindowsBasedSli.MetricRange | undefined;
  setMetricMeanInRange(value?: WindowsBasedSli.MetricRange): void;

  hasMetricSumInRange(): boolean;
  clearMetricSumInRange(): void;
  getMetricSumInRange(): WindowsBasedSli.MetricRange | undefined;
  setMetricSumInRange(value?: WindowsBasedSli.MetricRange): void;

  hasWindowPeriod(): boolean;
  clearWindowPeriod(): void;
  getWindowPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setWindowPeriod(value?: google_protobuf_duration_pb.Duration): void;

  getWindowCriterionCase(): WindowsBasedSli.WindowCriterionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WindowsBasedSli.AsObject;
  static toObject(includeInstance: boolean, msg: WindowsBasedSli): WindowsBasedSli.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WindowsBasedSli, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WindowsBasedSli;
  static deserializeBinaryFromReader(message: WindowsBasedSli, reader: jspb.BinaryReader): WindowsBasedSli;
}

export namespace WindowsBasedSli {
  export type AsObject = {
    goodBadMetricFilter: string,
    goodTotalRatioThreshold?: WindowsBasedSli.PerformanceThreshold.AsObject,
    metricMeanInRange?: WindowsBasedSli.MetricRange.AsObject,
    metricSumInRange?: WindowsBasedSli.MetricRange.AsObject,
    windowPeriod?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export class PerformanceThreshold extends jspb.Message {
    hasPerformance(): boolean;
    clearPerformance(): void;
    getPerformance(): RequestBasedSli | undefined;
    setPerformance(value?: RequestBasedSli): void;

    hasBasicSliPerformance(): boolean;
    clearBasicSliPerformance(): void;
    getBasicSliPerformance(): BasicSli | undefined;
    setBasicSliPerformance(value?: BasicSli): void;

    getThreshold(): number;
    setThreshold(value: number): void;

    getTypeCase(): PerformanceThreshold.TypeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerformanceThreshold.AsObject;
    static toObject(includeInstance: boolean, msg: PerformanceThreshold): PerformanceThreshold.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerformanceThreshold, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerformanceThreshold;
    static deserializeBinaryFromReader(message: PerformanceThreshold, reader: jspb.BinaryReader): PerformanceThreshold;
  }

  export namespace PerformanceThreshold {
    export type AsObject = {
      performance?: RequestBasedSli.AsObject,
      basicSliPerformance?: BasicSli.AsObject,
      threshold: number,
    }

    export enum TypeCase {
      TYPE_NOT_SET = 0,
      PERFORMANCE = 1,
      BASIC_SLI_PERFORMANCE = 3,
    }
  }

  export class MetricRange extends jspb.Message {
    getTimeSeries(): string;
    setTimeSeries(value: string): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricRange.AsObject;
    static toObject(includeInstance: boolean, msg: MetricRange): MetricRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricRange;
    static deserializeBinaryFromReader(message: MetricRange, reader: jspb.BinaryReader): MetricRange;
  }

  export namespace MetricRange {
    export type AsObject = {
      timeSeries: string,
      range?: Range.AsObject,
    }
  }

  export enum WindowCriterionCase {
    WINDOW_CRITERION_NOT_SET = 0,
    GOOD_BAD_METRIC_FILTER = 5,
    GOOD_TOTAL_RATIO_THRESHOLD = 2,
    METRIC_MEAN_IN_RANGE = 6,
    METRIC_SUM_IN_RANGE = 7,
  }
}

