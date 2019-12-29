// package: google.devtools.clouddebugger.v2
// file: google/devtools/clouddebugger/v2/controller.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_devtools_clouddebugger_v2_data_pb from "../../../../google/devtools/clouddebugger/v2/data_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class RegisterDebuggeeRequest extends jspb.Message {
  hasDebuggee(): boolean;
  clearDebuggee(): void;
  getDebuggee(): google_devtools_clouddebugger_v2_data_pb.Debuggee | undefined;
  setDebuggee(value?: google_devtools_clouddebugger_v2_data_pb.Debuggee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterDebuggeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterDebuggeeRequest): RegisterDebuggeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterDebuggeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterDebuggeeRequest;
  static deserializeBinaryFromReader(message: RegisterDebuggeeRequest, reader: jspb.BinaryReader): RegisterDebuggeeRequest;
}

export namespace RegisterDebuggeeRequest {
  export type AsObject = {
    debuggee?: google_devtools_clouddebugger_v2_data_pb.Debuggee.AsObject,
  }
}

export class RegisterDebuggeeResponse extends jspb.Message {
  hasDebuggee(): boolean;
  clearDebuggee(): void;
  getDebuggee(): google_devtools_clouddebugger_v2_data_pb.Debuggee | undefined;
  setDebuggee(value?: google_devtools_clouddebugger_v2_data_pb.Debuggee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterDebuggeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterDebuggeeResponse): RegisterDebuggeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterDebuggeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterDebuggeeResponse;
  static deserializeBinaryFromReader(message: RegisterDebuggeeResponse, reader: jspb.BinaryReader): RegisterDebuggeeResponse;
}

export namespace RegisterDebuggeeResponse {
  export type AsObject = {
    debuggee?: google_devtools_clouddebugger_v2_data_pb.Debuggee.AsObject,
  }
}

export class ListActiveBreakpointsRequest extends jspb.Message {
  getDebuggeeId(): string;
  setDebuggeeId(value: string): void;

  getWaitToken(): string;
  setWaitToken(value: string): void;

  getSuccessOnTimeout(): boolean;
  setSuccessOnTimeout(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActiveBreakpointsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListActiveBreakpointsRequest): ListActiveBreakpointsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListActiveBreakpointsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActiveBreakpointsRequest;
  static deserializeBinaryFromReader(message: ListActiveBreakpointsRequest, reader: jspb.BinaryReader): ListActiveBreakpointsRequest;
}

export namespace ListActiveBreakpointsRequest {
  export type AsObject = {
    debuggeeId: string,
    waitToken: string,
    successOnTimeout: boolean,
  }
}

export class ListActiveBreakpointsResponse extends jspb.Message {
  clearBreakpointsList(): void;
  getBreakpointsList(): Array<google_devtools_clouddebugger_v2_data_pb.Breakpoint>;
  setBreakpointsList(value: Array<google_devtools_clouddebugger_v2_data_pb.Breakpoint>): void;
  addBreakpoints(value?: google_devtools_clouddebugger_v2_data_pb.Breakpoint, index?: number): google_devtools_clouddebugger_v2_data_pb.Breakpoint;

  getNextWaitToken(): string;
  setNextWaitToken(value: string): void;

  getWaitExpired(): boolean;
  setWaitExpired(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActiveBreakpointsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListActiveBreakpointsResponse): ListActiveBreakpointsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListActiveBreakpointsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActiveBreakpointsResponse;
  static deserializeBinaryFromReader(message: ListActiveBreakpointsResponse, reader: jspb.BinaryReader): ListActiveBreakpointsResponse;
}

export namespace ListActiveBreakpointsResponse {
  export type AsObject = {
    breakpointsList: Array<google_devtools_clouddebugger_v2_data_pb.Breakpoint.AsObject>,
    nextWaitToken: string,
    waitExpired: boolean,
  }
}

export class UpdateActiveBreakpointRequest extends jspb.Message {
  getDebuggeeId(): string;
  setDebuggeeId(value: string): void;

  hasBreakpoint(): boolean;
  clearBreakpoint(): void;
  getBreakpoint(): google_devtools_clouddebugger_v2_data_pb.Breakpoint | undefined;
  setBreakpoint(value?: google_devtools_clouddebugger_v2_data_pb.Breakpoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActiveBreakpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActiveBreakpointRequest): UpdateActiveBreakpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateActiveBreakpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActiveBreakpointRequest;
  static deserializeBinaryFromReader(message: UpdateActiveBreakpointRequest, reader: jspb.BinaryReader): UpdateActiveBreakpointRequest;
}

export namespace UpdateActiveBreakpointRequest {
  export type AsObject = {
    debuggeeId: string,
    breakpoint?: google_devtools_clouddebugger_v2_data_pb.Breakpoint.AsObject,
  }
}

export class UpdateActiveBreakpointResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActiveBreakpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActiveBreakpointResponse): UpdateActiveBreakpointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateActiveBreakpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActiveBreakpointResponse;
  static deserializeBinaryFromReader(message: UpdateActiveBreakpointResponse, reader: jspb.BinaryReader): UpdateActiveBreakpointResponse;
}

export namespace UpdateActiveBreakpointResponse {
  export type AsObject = {
  }
}

