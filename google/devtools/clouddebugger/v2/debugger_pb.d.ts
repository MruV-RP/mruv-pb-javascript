// package: google.devtools.clouddebugger.v2
// file: google/devtools/clouddebugger/v2/debugger.proto

import * as jspb from "google-protobuf";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_devtools_clouddebugger_v2_data_pb from "../../../../google/devtools/clouddebugger/v2/data_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class SetBreakpointRequest extends jspb.Message {
  getDebuggeeId(): string;
  setDebuggeeId(value: string): void;

  hasBreakpoint(): boolean;
  clearBreakpoint(): void;
  getBreakpoint(): google_devtools_clouddebugger_v2_data_pb.Breakpoint | undefined;
  setBreakpoint(value?: google_devtools_clouddebugger_v2_data_pb.Breakpoint): void;

  getClientVersion(): string;
  setClientVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetBreakpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetBreakpointRequest): SetBreakpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetBreakpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetBreakpointRequest;
  static deserializeBinaryFromReader(message: SetBreakpointRequest, reader: jspb.BinaryReader): SetBreakpointRequest;
}

export namespace SetBreakpointRequest {
  export type AsObject = {
    debuggeeId: string,
    breakpoint?: google_devtools_clouddebugger_v2_data_pb.Breakpoint.AsObject,
    clientVersion: string,
  }
}

export class SetBreakpointResponse extends jspb.Message {
  hasBreakpoint(): boolean;
  clearBreakpoint(): void;
  getBreakpoint(): google_devtools_clouddebugger_v2_data_pb.Breakpoint | undefined;
  setBreakpoint(value?: google_devtools_clouddebugger_v2_data_pb.Breakpoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetBreakpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetBreakpointResponse): SetBreakpointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetBreakpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetBreakpointResponse;
  static deserializeBinaryFromReader(message: SetBreakpointResponse, reader: jspb.BinaryReader): SetBreakpointResponse;
}

export namespace SetBreakpointResponse {
  export type AsObject = {
    breakpoint?: google_devtools_clouddebugger_v2_data_pb.Breakpoint.AsObject,
  }
}

export class GetBreakpointRequest extends jspb.Message {
  getDebuggeeId(): string;
  setDebuggeeId(value: string): void;

  getBreakpointId(): string;
  setBreakpointId(value: string): void;

  getClientVersion(): string;
  setClientVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBreakpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBreakpointRequest): GetBreakpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBreakpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBreakpointRequest;
  static deserializeBinaryFromReader(message: GetBreakpointRequest, reader: jspb.BinaryReader): GetBreakpointRequest;
}

export namespace GetBreakpointRequest {
  export type AsObject = {
    debuggeeId: string,
    breakpointId: string,
    clientVersion: string,
  }
}

export class GetBreakpointResponse extends jspb.Message {
  hasBreakpoint(): boolean;
  clearBreakpoint(): void;
  getBreakpoint(): google_devtools_clouddebugger_v2_data_pb.Breakpoint | undefined;
  setBreakpoint(value?: google_devtools_clouddebugger_v2_data_pb.Breakpoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBreakpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBreakpointResponse): GetBreakpointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBreakpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBreakpointResponse;
  static deserializeBinaryFromReader(message: GetBreakpointResponse, reader: jspb.BinaryReader): GetBreakpointResponse;
}

export namespace GetBreakpointResponse {
  export type AsObject = {
    breakpoint?: google_devtools_clouddebugger_v2_data_pb.Breakpoint.AsObject,
  }
}

export class DeleteBreakpointRequest extends jspb.Message {
  getDebuggeeId(): string;
  setDebuggeeId(value: string): void;

  getBreakpointId(): string;
  setBreakpointId(value: string): void;

  getClientVersion(): string;
  setClientVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBreakpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBreakpointRequest): DeleteBreakpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBreakpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBreakpointRequest;
  static deserializeBinaryFromReader(message: DeleteBreakpointRequest, reader: jspb.BinaryReader): DeleteBreakpointRequest;
}

export namespace DeleteBreakpointRequest {
  export type AsObject = {
    debuggeeId: string,
    breakpointId: string,
    clientVersion: string,
  }
}

export class ListBreakpointsRequest extends jspb.Message {
  getDebuggeeId(): string;
  setDebuggeeId(value: string): void;

  getIncludeAllUsers(): boolean;
  setIncludeAllUsers(value: boolean): void;

  getIncludeInactive(): boolean;
  setIncludeInactive(value: boolean): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): ListBreakpointsRequest.BreakpointActionValue | undefined;
  setAction(value?: ListBreakpointsRequest.BreakpointActionValue): void;

  getStripResults(): boolean;
  setStripResults(value: boolean): void;

  getWaitToken(): string;
  setWaitToken(value: string): void;

  getClientVersion(): string;
  setClientVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBreakpointsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBreakpointsRequest): ListBreakpointsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBreakpointsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBreakpointsRequest;
  static deserializeBinaryFromReader(message: ListBreakpointsRequest, reader: jspb.BinaryReader): ListBreakpointsRequest;
}

export namespace ListBreakpointsRequest {
  export type AsObject = {
    debuggeeId: string,
    includeAllUsers: boolean,
    includeInactive: boolean,
    action?: ListBreakpointsRequest.BreakpointActionValue.AsObject,
    stripResults: boolean,
    waitToken: string,
    clientVersion: string,
  }

  export class BreakpointActionValue extends jspb.Message {
    getValue(): google_devtools_clouddebugger_v2_data_pb.Breakpoint.ActionMap[keyof google_devtools_clouddebugger_v2_data_pb.Breakpoint.ActionMap];
    setValue(value: google_devtools_clouddebugger_v2_data_pb.Breakpoint.ActionMap[keyof google_devtools_clouddebugger_v2_data_pb.Breakpoint.ActionMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BreakpointActionValue.AsObject;
    static toObject(includeInstance: boolean, msg: BreakpointActionValue): BreakpointActionValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BreakpointActionValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BreakpointActionValue;
    static deserializeBinaryFromReader(message: BreakpointActionValue, reader: jspb.BinaryReader): BreakpointActionValue;
  }

  export namespace BreakpointActionValue {
    export type AsObject = {
      value: google_devtools_clouddebugger_v2_data_pb.Breakpoint.ActionMap[keyof google_devtools_clouddebugger_v2_data_pb.Breakpoint.ActionMap],
    }
  }
}

export class ListBreakpointsResponse extends jspb.Message {
  clearBreakpointsList(): void;
  getBreakpointsList(): Array<google_devtools_clouddebugger_v2_data_pb.Breakpoint>;
  setBreakpointsList(value: Array<google_devtools_clouddebugger_v2_data_pb.Breakpoint>): void;
  addBreakpoints(value?: google_devtools_clouddebugger_v2_data_pb.Breakpoint, index?: number): google_devtools_clouddebugger_v2_data_pb.Breakpoint;

  getNextWaitToken(): string;
  setNextWaitToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBreakpointsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBreakpointsResponse): ListBreakpointsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBreakpointsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBreakpointsResponse;
  static deserializeBinaryFromReader(message: ListBreakpointsResponse, reader: jspb.BinaryReader): ListBreakpointsResponse;
}

export namespace ListBreakpointsResponse {
  export type AsObject = {
    breakpointsList: Array<google_devtools_clouddebugger_v2_data_pb.Breakpoint.AsObject>,
    nextWaitToken: string,
  }
}

export class ListDebuggeesRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getIncludeInactive(): boolean;
  setIncludeInactive(value: boolean): void;

  getClientVersion(): string;
  setClientVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDebuggeesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDebuggeesRequest): ListDebuggeesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDebuggeesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDebuggeesRequest;
  static deserializeBinaryFromReader(message: ListDebuggeesRequest, reader: jspb.BinaryReader): ListDebuggeesRequest;
}

export namespace ListDebuggeesRequest {
  export type AsObject = {
    project: string,
    includeInactive: boolean,
    clientVersion: string,
  }
}

export class ListDebuggeesResponse extends jspb.Message {
  clearDebuggeesList(): void;
  getDebuggeesList(): Array<google_devtools_clouddebugger_v2_data_pb.Debuggee>;
  setDebuggeesList(value: Array<google_devtools_clouddebugger_v2_data_pb.Debuggee>): void;
  addDebuggees(value?: google_devtools_clouddebugger_v2_data_pb.Debuggee, index?: number): google_devtools_clouddebugger_v2_data_pb.Debuggee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDebuggeesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDebuggeesResponse): ListDebuggeesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDebuggeesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDebuggeesResponse;
  static deserializeBinaryFromReader(message: ListDebuggeesResponse, reader: jspb.BinaryReader): ListDebuggeesResponse;
}

export namespace ListDebuggeesResponse {
  export type AsObject = {
    debuggeesList: Array<google_devtools_clouddebugger_v2_data_pb.Debuggee.AsObject>,
  }
}

