// package: google.spanner.v1
// file: google/spanner/v1/query_plan.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class PlanNode extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getKind(): PlanNode.KindMap[keyof PlanNode.KindMap];
  setKind(value: PlanNode.KindMap[keyof PlanNode.KindMap]): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  clearChildLinksList(): void;
  getChildLinksList(): Array<PlanNode.ChildLink>;
  setChildLinksList(value: Array<PlanNode.ChildLink>): void;
  addChildLinks(value?: PlanNode.ChildLink, index?: number): PlanNode.ChildLink;

  hasShortRepresentation(): boolean;
  clearShortRepresentation(): void;
  getShortRepresentation(): PlanNode.ShortRepresentation | undefined;
  setShortRepresentation(value?: PlanNode.ShortRepresentation): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;

  hasExecutionStats(): boolean;
  clearExecutionStats(): void;
  getExecutionStats(): google_protobuf_struct_pb.Struct | undefined;
  setExecutionStats(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanNode.AsObject;
  static toObject(includeInstance: boolean, msg: PlanNode): PlanNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanNode;
  static deserializeBinaryFromReader(message: PlanNode, reader: jspb.BinaryReader): PlanNode;
}

export namespace PlanNode {
  export type AsObject = {
    index: number,
    kind: PlanNode.KindMap[keyof PlanNode.KindMap],
    displayName: string,
    childLinksList: Array<PlanNode.ChildLink.AsObject>,
    shortRepresentation?: PlanNode.ShortRepresentation.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    executionStats?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class ChildLink extends jspb.Message {
    getChildIndex(): number;
    setChildIndex(value: number): void;

    getType(): string;
    setType(value: string): void;

    getVariable(): string;
    setVariable(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChildLink.AsObject;
    static toObject(includeInstance: boolean, msg: ChildLink): ChildLink.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChildLink, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChildLink;
    static deserializeBinaryFromReader(message: ChildLink, reader: jspb.BinaryReader): ChildLink;
  }

  export namespace ChildLink {
    export type AsObject = {
      childIndex: number,
      type: string,
      variable: string,
    }
  }

  export class ShortRepresentation extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    getSubqueriesMap(): jspb.Map<string, number>;
    clearSubqueriesMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShortRepresentation.AsObject;
    static toObject(includeInstance: boolean, msg: ShortRepresentation): ShortRepresentation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShortRepresentation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShortRepresentation;
    static deserializeBinaryFromReader(message: ShortRepresentation, reader: jspb.BinaryReader): ShortRepresentation;
  }

  export namespace ShortRepresentation {
    export type AsObject = {
      description: string,
      subqueriesMap: Array<[string, number]>,
    }
  }

  export interface KindMap {
    KIND_UNSPECIFIED: 0;
    RELATIONAL: 1;
    SCALAR: 2;
  }

  export const Kind: KindMap;
}

export class QueryPlan extends jspb.Message {
  clearPlanNodesList(): void;
  getPlanNodesList(): Array<PlanNode>;
  setPlanNodesList(value: Array<PlanNode>): void;
  addPlanNodes(value?: PlanNode, index?: number): PlanNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPlan.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPlan): QueryPlan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPlan;
  static deserializeBinaryFromReader(message: QueryPlan, reader: jspb.BinaryReader): QueryPlan;
}

export namespace QueryPlan {
  export type AsObject = {
    planNodesList: Array<PlanNode.AsObject>,
  }
}

