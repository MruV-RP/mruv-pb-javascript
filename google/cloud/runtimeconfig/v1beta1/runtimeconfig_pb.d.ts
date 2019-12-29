// package: google.cloud.runtimeconfig.v1beta1
// file: google/cloud/runtimeconfig/v1beta1/runtimeconfig.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_runtimeconfig_v1beta1_resources_pb from "../../../../google/cloud/runtimeconfig/v1beta1/resources_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListConfigsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfigsRequest): ListConfigsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfigsRequest;
  static deserializeBinaryFromReader(message: ListConfigsRequest, reader: jspb.BinaryReader): ListConfigsRequest;
}

export namespace ListConfigsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListConfigsResponse extends jspb.Message {
  clearConfigsList(): void;
  getConfigsList(): Array<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>;
  setConfigsList(value: Array<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>): void;
  addConfigs(value?: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig, index?: number): google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfigsResponse): ListConfigsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfigsResponse;
  static deserializeBinaryFromReader(message: ListConfigsResponse, reader: jspb.BinaryReader): ListConfigsResponse;
}

export namespace ListConfigsResponse {
  export type AsObject = {
    configsList: Array<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.AsObject>,
    nextPageToken: string,
  }
}

export class GetConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfigRequest): GetConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfigRequest;
  static deserializeBinaryFromReader(message: GetConfigRequest, reader: jspb.BinaryReader): GetConfigRequest;
}

export namespace GetConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateConfigRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig | undefined;
  setConfig(value?: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConfigRequest): CreateConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConfigRequest;
  static deserializeBinaryFromReader(message: CreateConfigRequest, reader: jspb.BinaryReader): CreateConfigRequest;
}

export namespace CreateConfigRequest {
  export type AsObject = {
    parent: string,
    config?: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.AsObject,
    requestId: string,
  }
}

export class UpdateConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig | undefined;
  setConfig(value?: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConfigRequest): UpdateConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConfigRequest;
  static deserializeBinaryFromReader(message: UpdateConfigRequest, reader: jspb.BinaryReader): UpdateConfigRequest;
}

export namespace UpdateConfigRequest {
  export type AsObject = {
    name: string,
    config?: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.AsObject,
  }
}

export class DeleteConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConfigRequest): DeleteConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConfigRequest;
  static deserializeBinaryFromReader(message: DeleteConfigRequest, reader: jspb.BinaryReader): DeleteConfigRequest;
}

export namespace DeleteConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListVariablesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getReturnValues(): boolean;
  setReturnValues(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVariablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVariablesRequest): ListVariablesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVariablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVariablesRequest;
  static deserializeBinaryFromReader(message: ListVariablesRequest, reader: jspb.BinaryReader): ListVariablesRequest;
}

export namespace ListVariablesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
    returnValues: boolean,
  }
}

export class ListVariablesResponse extends jspb.Message {
  clearVariablesList(): void;
  getVariablesList(): Array<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;
  setVariablesList(value: Array<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): void;
  addVariables(value?: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable, index?: number): google_cloud_runtimeconfig_v1beta1_resources_pb.Variable;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVariablesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVariablesResponse): ListVariablesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVariablesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVariablesResponse;
  static deserializeBinaryFromReader(message: ListVariablesResponse, reader: jspb.BinaryReader): ListVariablesResponse;
}

export namespace ListVariablesResponse {
  export type AsObject = {
    variablesList: Array<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.AsObject>,
    nextPageToken: string,
  }
}

export class WatchVariableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasNewerThan(): boolean;
  clearNewerThan(): void;
  getNewerThan(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNewerThan(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchVariableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchVariableRequest): WatchVariableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchVariableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchVariableRequest;
  static deserializeBinaryFromReader(message: WatchVariableRequest, reader: jspb.BinaryReader): WatchVariableRequest;
}

export namespace WatchVariableRequest {
  export type AsObject = {
    name: string,
    newerThan?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetVariableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVariableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVariableRequest): GetVariableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVariableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVariableRequest;
  static deserializeBinaryFromReader(message: GetVariableRequest, reader: jspb.BinaryReader): GetVariableRequest;
}

export namespace GetVariableRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateVariableRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasVariable(): boolean;
  clearVariable(): void;
  getVariable(): google_cloud_runtimeconfig_v1beta1_resources_pb.Variable | undefined;
  setVariable(value?: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVariableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVariableRequest): CreateVariableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVariableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVariableRequest;
  static deserializeBinaryFromReader(message: CreateVariableRequest, reader: jspb.BinaryReader): CreateVariableRequest;
}

export namespace CreateVariableRequest {
  export type AsObject = {
    parent: string,
    variable?: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.AsObject,
    requestId: string,
  }
}

export class UpdateVariableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasVariable(): boolean;
  clearVariable(): void;
  getVariable(): google_cloud_runtimeconfig_v1beta1_resources_pb.Variable | undefined;
  setVariable(value?: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVariableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVariableRequest): UpdateVariableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVariableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVariableRequest;
  static deserializeBinaryFromReader(message: UpdateVariableRequest, reader: jspb.BinaryReader): UpdateVariableRequest;
}

export namespace UpdateVariableRequest {
  export type AsObject = {
    name: string,
    variable?: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.AsObject,
  }
}

export class DeleteVariableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRecursive(): boolean;
  setRecursive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVariableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVariableRequest): DeleteVariableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVariableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVariableRequest;
  static deserializeBinaryFromReader(message: DeleteVariableRequest, reader: jspb.BinaryReader): DeleteVariableRequest;
}

export namespace DeleteVariableRequest {
  export type AsObject = {
    name: string,
    recursive: boolean,
  }
}

export class ListWaitersRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWaitersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWaitersRequest): ListWaitersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWaitersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWaitersRequest;
  static deserializeBinaryFromReader(message: ListWaitersRequest, reader: jspb.BinaryReader): ListWaitersRequest;
}

export namespace ListWaitersRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListWaitersResponse extends jspb.Message {
  clearWaitersList(): void;
  getWaitersList(): Array<google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter>;
  setWaitersList(value: Array<google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter>): void;
  addWaiters(value?: google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter, index?: number): google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWaitersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWaitersResponse): ListWaitersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWaitersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWaitersResponse;
  static deserializeBinaryFromReader(message: ListWaitersResponse, reader: jspb.BinaryReader): ListWaitersResponse;
}

export namespace ListWaitersResponse {
  export type AsObject = {
    waitersList: Array<google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter.AsObject>,
    nextPageToken: string,
  }
}

export class GetWaiterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWaiterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWaiterRequest): GetWaiterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWaiterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWaiterRequest;
  static deserializeBinaryFromReader(message: GetWaiterRequest, reader: jspb.BinaryReader): GetWaiterRequest;
}

export namespace GetWaiterRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateWaiterRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasWaiter(): boolean;
  clearWaiter(): void;
  getWaiter(): google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter | undefined;
  setWaiter(value?: google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWaiterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWaiterRequest): CreateWaiterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWaiterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWaiterRequest;
  static deserializeBinaryFromReader(message: CreateWaiterRequest, reader: jspb.BinaryReader): CreateWaiterRequest;
}

export namespace CreateWaiterRequest {
  export type AsObject = {
    parent: string,
    waiter?: google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter.AsObject,
    requestId: string,
  }
}

export class DeleteWaiterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWaiterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWaiterRequest): DeleteWaiterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWaiterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWaiterRequest;
  static deserializeBinaryFromReader(message: DeleteWaiterRequest, reader: jspb.BinaryReader): DeleteWaiterRequest;
}

export namespace DeleteWaiterRequest {
  export type AsObject = {
    name: string,
  }
}

