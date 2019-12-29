// package: google.monitoring.v3
// file: google/monitoring/v3/service_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_api_monitored_resource_pb from "../../../google/api/monitored_resource_pb";
import * as google_monitoring_v3_service_pb from "../../../google/monitoring/v3/service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../google/api/client_pb";

export class CreateServiceRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  hasService(): boolean;
  clearService(): void;
  getService(): google_monitoring_v3_service_pb.Service | undefined;
  setService(value?: google_monitoring_v3_service_pb.Service): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceRequest): CreateServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceRequest;
  static deserializeBinaryFromReader(message: CreateServiceRequest, reader: jspb.BinaryReader): CreateServiceRequest;
}

export namespace CreateServiceRequest {
  export type AsObject = {
    parent: string,
    serviceId: string,
    service?: google_monitoring_v3_service_pb.Service.AsObject,
  }
}

export class GetServiceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceRequest): GetServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceRequest;
  static deserializeBinaryFromReader(message: GetServiceRequest, reader: jspb.BinaryReader): GetServiceRequest;
}

export namespace GetServiceRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListServicesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServicesRequest): ListServicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServicesRequest;
  static deserializeBinaryFromReader(message: ListServicesRequest, reader: jspb.BinaryReader): ListServicesRequest;
}

export namespace ListServicesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListServicesResponse extends jspb.Message {
  clearServicesList(): void;
  getServicesList(): Array<google_monitoring_v3_service_pb.Service>;
  setServicesList(value: Array<google_monitoring_v3_service_pb.Service>): void;
  addServices(value?: google_monitoring_v3_service_pb.Service, index?: number): google_monitoring_v3_service_pb.Service;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServicesResponse): ListServicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServicesResponse;
  static deserializeBinaryFromReader(message: ListServicesResponse, reader: jspb.BinaryReader): ListServicesResponse;
}

export namespace ListServicesResponse {
  export type AsObject = {
    servicesList: Array<google_monitoring_v3_service_pb.Service.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateServiceRequest extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): google_monitoring_v3_service_pb.Service | undefined;
  setService(value?: google_monitoring_v3_service_pb.Service): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServiceRequest): UpdateServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServiceRequest;
  static deserializeBinaryFromReader(message: UpdateServiceRequest, reader: jspb.BinaryReader): UpdateServiceRequest;
}

export namespace UpdateServiceRequest {
  export type AsObject = {
    service?: google_monitoring_v3_service_pb.Service.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteServiceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceRequest): DeleteServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceRequest;
  static deserializeBinaryFromReader(message: DeleteServiceRequest, reader: jspb.BinaryReader): DeleteServiceRequest;
}

export namespace DeleteServiceRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateServiceLevelObjectiveRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getServiceLevelObjectiveId(): string;
  setServiceLevelObjectiveId(value: string): void;

  hasServiceLevelObjective(): boolean;
  clearServiceLevelObjective(): void;
  getServiceLevelObjective(): google_monitoring_v3_service_pb.ServiceLevelObjective | undefined;
  setServiceLevelObjective(value?: google_monitoring_v3_service_pb.ServiceLevelObjective): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceLevelObjectiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceLevelObjectiveRequest): CreateServiceLevelObjectiveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceLevelObjectiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceLevelObjectiveRequest;
  static deserializeBinaryFromReader(message: CreateServiceLevelObjectiveRequest, reader: jspb.BinaryReader): CreateServiceLevelObjectiveRequest;
}

export namespace CreateServiceLevelObjectiveRequest {
  export type AsObject = {
    parent: string,
    serviceLevelObjectiveId: string,
    serviceLevelObjective?: google_monitoring_v3_service_pb.ServiceLevelObjective.AsObject,
  }
}

export class GetServiceLevelObjectiveRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getView(): google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap[keyof google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap];
  setView(value: google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap[keyof google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceLevelObjectiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceLevelObjectiveRequest): GetServiceLevelObjectiveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceLevelObjectiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceLevelObjectiveRequest;
  static deserializeBinaryFromReader(message: GetServiceLevelObjectiveRequest, reader: jspb.BinaryReader): GetServiceLevelObjectiveRequest;
}

export namespace GetServiceLevelObjectiveRequest {
  export type AsObject = {
    name: string,
    view: google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap[keyof google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap],
  }
}

export class ListServiceLevelObjectivesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getView(): google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap[keyof google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap];
  setView(value: google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap[keyof google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceLevelObjectivesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceLevelObjectivesRequest): ListServiceLevelObjectivesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServiceLevelObjectivesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceLevelObjectivesRequest;
  static deserializeBinaryFromReader(message: ListServiceLevelObjectivesRequest, reader: jspb.BinaryReader): ListServiceLevelObjectivesRequest;
}

export namespace ListServiceLevelObjectivesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
    view: google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap[keyof google_monitoring_v3_service_pb.ServiceLevelObjective.ViewMap],
  }
}

export class ListServiceLevelObjectivesResponse extends jspb.Message {
  clearServiceLevelObjectivesList(): void;
  getServiceLevelObjectivesList(): Array<google_monitoring_v3_service_pb.ServiceLevelObjective>;
  setServiceLevelObjectivesList(value: Array<google_monitoring_v3_service_pb.ServiceLevelObjective>): void;
  addServiceLevelObjectives(value?: google_monitoring_v3_service_pb.ServiceLevelObjective, index?: number): google_monitoring_v3_service_pb.ServiceLevelObjective;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceLevelObjectivesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceLevelObjectivesResponse): ListServiceLevelObjectivesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServiceLevelObjectivesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceLevelObjectivesResponse;
  static deserializeBinaryFromReader(message: ListServiceLevelObjectivesResponse, reader: jspb.BinaryReader): ListServiceLevelObjectivesResponse;
}

export namespace ListServiceLevelObjectivesResponse {
  export type AsObject = {
    serviceLevelObjectivesList: Array<google_monitoring_v3_service_pb.ServiceLevelObjective.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateServiceLevelObjectiveRequest extends jspb.Message {
  hasServiceLevelObjective(): boolean;
  clearServiceLevelObjective(): void;
  getServiceLevelObjective(): google_monitoring_v3_service_pb.ServiceLevelObjective | undefined;
  setServiceLevelObjective(value?: google_monitoring_v3_service_pb.ServiceLevelObjective): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServiceLevelObjectiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServiceLevelObjectiveRequest): UpdateServiceLevelObjectiveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateServiceLevelObjectiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServiceLevelObjectiveRequest;
  static deserializeBinaryFromReader(message: UpdateServiceLevelObjectiveRequest, reader: jspb.BinaryReader): UpdateServiceLevelObjectiveRequest;
}

export namespace UpdateServiceLevelObjectiveRequest {
  export type AsObject = {
    serviceLevelObjective?: google_monitoring_v3_service_pb.ServiceLevelObjective.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteServiceLevelObjectiveRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceLevelObjectiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceLevelObjectiveRequest): DeleteServiceLevelObjectiveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServiceLevelObjectiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceLevelObjectiveRequest;
  static deserializeBinaryFromReader(message: DeleteServiceLevelObjectiveRequest, reader: jspb.BinaryReader): DeleteServiceLevelObjectiveRequest;
}

export namespace DeleteServiceLevelObjectiveRequest {
  export type AsObject = {
    name: string,
  }
}

