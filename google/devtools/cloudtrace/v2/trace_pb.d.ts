// package: google.devtools.cloudtrace.v2
// file: google/devtools/cloudtrace/v2/trace.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class Span extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSpanId(): string;
  setSpanId(value: string): void;

  getParentSpanId(): string;
  setParentSpanId(value: string): void;

  hasDisplayName(): boolean;
  clearDisplayName(): void;
  getDisplayName(): TruncatableString | undefined;
  setDisplayName(value?: TruncatableString): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): Span.Attributes | undefined;
  setAttributes(value?: Span.Attributes): void;

  hasStackTrace(): boolean;
  clearStackTrace(): void;
  getStackTrace(): StackTrace | undefined;
  setStackTrace(value?: StackTrace): void;

  hasTimeEvents(): boolean;
  clearTimeEvents(): void;
  getTimeEvents(): Span.TimeEvents | undefined;
  setTimeEvents(value?: Span.TimeEvents): void;

  hasLinks(): boolean;
  clearLinks(): void;
  getLinks(): Span.Links | undefined;
  setLinks(value?: Span.Links): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  hasSameProcessAsParentSpan(): boolean;
  clearSameProcessAsParentSpan(): void;
  getSameProcessAsParentSpan(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSameProcessAsParentSpan(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasChildSpanCount(): boolean;
  clearChildSpanCount(): void;
  getChildSpanCount(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setChildSpanCount(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Span.AsObject;
  static toObject(includeInstance: boolean, msg: Span): Span.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Span, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Span;
  static deserializeBinaryFromReader(message: Span, reader: jspb.BinaryReader): Span;
}

export namespace Span {
  export type AsObject = {
    name: string,
    spanId: string,
    parentSpanId: string,
    displayName?: TruncatableString.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    attributes?: Span.Attributes.AsObject,
    stackTrace?: StackTrace.AsObject,
    timeEvents?: Span.TimeEvents.AsObject,
    links?: Span.Links.AsObject,
    status?: google_rpc_status_pb.Status.AsObject,
    sameProcessAsParentSpan?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    childSpanCount?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }

  export class Attributes extends jspb.Message {
    getAttributeMapMap(): jspb.Map<string, AttributeValue>;
    clearAttributeMapMap(): void;
    getDroppedAttributesCount(): number;
    setDroppedAttributesCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attributes.AsObject;
    static toObject(includeInstance: boolean, msg: Attributes): Attributes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attributes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attributes;
    static deserializeBinaryFromReader(message: Attributes, reader: jspb.BinaryReader): Attributes;
  }

  export namespace Attributes {
    export type AsObject = {
      attributeMapMap: Array<[string, AttributeValue.AsObject]>,
      droppedAttributesCount: number,
    }
  }

  export class TimeEvent extends jspb.Message {
    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): Span.TimeEvent.Annotation | undefined;
    setAnnotation(value?: Span.TimeEvent.Annotation): void;

    hasMessageEvent(): boolean;
    clearMessageEvent(): void;
    getMessageEvent(): Span.TimeEvent.MessageEvent | undefined;
    setMessageEvent(value?: Span.TimeEvent.MessageEvent): void;

    getValueCase(): TimeEvent.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TimeEvent): TimeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeEvent;
    static deserializeBinaryFromReader(message: TimeEvent, reader: jspb.BinaryReader): TimeEvent;
  }

  export namespace TimeEvent {
    export type AsObject = {
      time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      annotation?: Span.TimeEvent.Annotation.AsObject,
      messageEvent?: Span.TimeEvent.MessageEvent.AsObject,
    }

    export class Annotation extends jspb.Message {
      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): TruncatableString | undefined;
      setDescription(value?: TruncatableString): void;

      hasAttributes(): boolean;
      clearAttributes(): void;
      getAttributes(): Span.Attributes | undefined;
      setAttributes(value?: Span.Attributes): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Annotation.AsObject;
      static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Annotation;
      static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
    }

    export namespace Annotation {
      export type AsObject = {
        description?: TruncatableString.AsObject,
        attributes?: Span.Attributes.AsObject,
      }
    }

    export class MessageEvent extends jspb.Message {
      getType(): Span.TimeEvent.MessageEvent.TypeMap[keyof Span.TimeEvent.MessageEvent.TypeMap];
      setType(value: Span.TimeEvent.MessageEvent.TypeMap[keyof Span.TimeEvent.MessageEvent.TypeMap]): void;

      getId(): number;
      setId(value: number): void;

      getUncompressedSizeBytes(): number;
      setUncompressedSizeBytes(value: number): void;

      getCompressedSizeBytes(): number;
      setCompressedSizeBytes(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MessageEvent.AsObject;
      static toObject(includeInstance: boolean, msg: MessageEvent): MessageEvent.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: MessageEvent, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MessageEvent;
      static deserializeBinaryFromReader(message: MessageEvent, reader: jspb.BinaryReader): MessageEvent;
    }

    export namespace MessageEvent {
      export type AsObject = {
        type: Span.TimeEvent.MessageEvent.TypeMap[keyof Span.TimeEvent.MessageEvent.TypeMap],
        id: number,
        uncompressedSizeBytes: number,
        compressedSizeBytes: number,
      }

      export interface TypeMap {
        TYPE_UNSPECIFIED: 0;
        SENT: 1;
        RECEIVED: 2;
      }

      export const Type: TypeMap;
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      ANNOTATION = 2,
      MESSAGE_EVENT = 3,
    }
  }

  export class TimeEvents extends jspb.Message {
    clearTimeEventList(): void;
    getTimeEventList(): Array<Span.TimeEvent>;
    setTimeEventList(value: Array<Span.TimeEvent>): void;
    addTimeEvent(value?: Span.TimeEvent, index?: number): Span.TimeEvent;

    getDroppedAnnotationsCount(): number;
    setDroppedAnnotationsCount(value: number): void;

    getDroppedMessageEventsCount(): number;
    setDroppedMessageEventsCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeEvents.AsObject;
    static toObject(includeInstance: boolean, msg: TimeEvents): TimeEvents.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeEvents, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeEvents;
    static deserializeBinaryFromReader(message: TimeEvents, reader: jspb.BinaryReader): TimeEvents;
  }

  export namespace TimeEvents {
    export type AsObject = {
      timeEventList: Array<Span.TimeEvent.AsObject>,
      droppedAnnotationsCount: number,
      droppedMessageEventsCount: number,
    }
  }

  export class Link extends jspb.Message {
    getTraceId(): string;
    setTraceId(value: string): void;

    getSpanId(): string;
    setSpanId(value: string): void;

    getType(): Span.Link.TypeMap[keyof Span.Link.TypeMap];
    setType(value: Span.Link.TypeMap[keyof Span.Link.TypeMap]): void;

    hasAttributes(): boolean;
    clearAttributes(): void;
    getAttributes(): Span.Attributes | undefined;
    setAttributes(value?: Span.Attributes): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
  }

  export namespace Link {
    export type AsObject = {
      traceId: string,
      spanId: string,
      type: Span.Link.TypeMap[keyof Span.Link.TypeMap],
      attributes?: Span.Attributes.AsObject,
    }

    export interface TypeMap {
      TYPE_UNSPECIFIED: 0;
      CHILD_LINKED_SPAN: 1;
      PARENT_LINKED_SPAN: 2;
    }

    export const Type: TypeMap;
  }

  export class Links extends jspb.Message {
    clearLinkList(): void;
    getLinkList(): Array<Span.Link>;
    setLinkList(value: Array<Span.Link>): void;
    addLink(value?: Span.Link, index?: number): Span.Link;

    getDroppedLinksCount(): number;
    setDroppedLinksCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Links.AsObject;
    static toObject(includeInstance: boolean, msg: Links): Links.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Links, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Links;
    static deserializeBinaryFromReader(message: Links, reader: jspb.BinaryReader): Links;
  }

  export namespace Links {
    export type AsObject = {
      linkList: Array<Span.Link.AsObject>,
      droppedLinksCount: number,
    }
  }
}

export class AttributeValue extends jspb.Message {
  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): TruncatableString | undefined;
  setStringValue(value?: TruncatableString): void;

  hasIntValue(): boolean;
  clearIntValue(): void;
  getIntValue(): number;
  setIntValue(value: number): void;

  hasBoolValue(): boolean;
  clearBoolValue(): void;
  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  getValueCase(): AttributeValue.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeValue.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeValue): AttributeValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttributeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeValue;
  static deserializeBinaryFromReader(message: AttributeValue, reader: jspb.BinaryReader): AttributeValue;
}

export namespace AttributeValue {
  export type AsObject = {
    stringValue?: TruncatableString.AsObject,
    intValue: number,
    boolValue: boolean,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    STRING_VALUE = 1,
    INT_VALUE = 2,
    BOOL_VALUE = 3,
  }
}

export class StackTrace extends jspb.Message {
  hasStackFrames(): boolean;
  clearStackFrames(): void;
  getStackFrames(): StackTrace.StackFrames | undefined;
  setStackFrames(value?: StackTrace.StackFrames): void;

  getStackTraceHashId(): number;
  setStackTraceHashId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StackTrace.AsObject;
  static toObject(includeInstance: boolean, msg: StackTrace): StackTrace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StackTrace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StackTrace;
  static deserializeBinaryFromReader(message: StackTrace, reader: jspb.BinaryReader): StackTrace;
}

export namespace StackTrace {
  export type AsObject = {
    stackFrames?: StackTrace.StackFrames.AsObject,
    stackTraceHashId: number,
  }

  export class StackFrame extends jspb.Message {
    hasFunctionName(): boolean;
    clearFunctionName(): void;
    getFunctionName(): TruncatableString | undefined;
    setFunctionName(value?: TruncatableString): void;

    hasOriginalFunctionName(): boolean;
    clearOriginalFunctionName(): void;
    getOriginalFunctionName(): TruncatableString | undefined;
    setOriginalFunctionName(value?: TruncatableString): void;

    hasFileName(): boolean;
    clearFileName(): void;
    getFileName(): TruncatableString | undefined;
    setFileName(value?: TruncatableString): void;

    getLineNumber(): number;
    setLineNumber(value: number): void;

    getColumnNumber(): number;
    setColumnNumber(value: number): void;

    hasLoadModule(): boolean;
    clearLoadModule(): void;
    getLoadModule(): Module | undefined;
    setLoadModule(value?: Module): void;

    hasSourceVersion(): boolean;
    clearSourceVersion(): void;
    getSourceVersion(): TruncatableString | undefined;
    setSourceVersion(value?: TruncatableString): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StackFrame.AsObject;
    static toObject(includeInstance: boolean, msg: StackFrame): StackFrame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StackFrame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StackFrame;
    static deserializeBinaryFromReader(message: StackFrame, reader: jspb.BinaryReader): StackFrame;
  }

  export namespace StackFrame {
    export type AsObject = {
      functionName?: TruncatableString.AsObject,
      originalFunctionName?: TruncatableString.AsObject,
      fileName?: TruncatableString.AsObject,
      lineNumber: number,
      columnNumber: number,
      loadModule?: Module.AsObject,
      sourceVersion?: TruncatableString.AsObject,
    }
  }

  export class StackFrames extends jspb.Message {
    clearFrameList(): void;
    getFrameList(): Array<StackTrace.StackFrame>;
    setFrameList(value: Array<StackTrace.StackFrame>): void;
    addFrame(value?: StackTrace.StackFrame, index?: number): StackTrace.StackFrame;

    getDroppedFramesCount(): number;
    setDroppedFramesCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StackFrames.AsObject;
    static toObject(includeInstance: boolean, msg: StackFrames): StackFrames.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StackFrames, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StackFrames;
    static deserializeBinaryFromReader(message: StackFrames, reader: jspb.BinaryReader): StackFrames;
  }

  export namespace StackFrames {
    export type AsObject = {
      frameList: Array<StackTrace.StackFrame.AsObject>,
      droppedFramesCount: number,
    }
  }
}

export class Module extends jspb.Message {
  hasModule(): boolean;
  clearModule(): void;
  getModule(): TruncatableString | undefined;
  setModule(value?: TruncatableString): void;

  hasBuildId(): boolean;
  clearBuildId(): void;
  getBuildId(): TruncatableString | undefined;
  setBuildId(value?: TruncatableString): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    module?: TruncatableString.AsObject,
    buildId?: TruncatableString.AsObject,
  }
}

export class TruncatableString extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getTruncatedByteCount(): number;
  setTruncatedByteCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruncatableString.AsObject;
  static toObject(includeInstance: boolean, msg: TruncatableString): TruncatableString.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TruncatableString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TruncatableString;
  static deserializeBinaryFromReader(message: TruncatableString, reader: jspb.BinaryReader): TruncatableString;
}

export namespace TruncatableString {
  export type AsObject = {
    value: string,
    truncatedByteCount: number,
  }
}

